import { PortfolioProject } from '../data/portfolioData';

const DB_NAME = 'SojibPortfolioDB';
const DB_VERSION = 1;
const STORE_NAME = 'projects';

const LOCAL_STORAGE_KEYS = [
  'sojib_custom_portfolio_projects',
  'portfolio_custom_projects',
  'portfolio_projects',
  'custom_projects',
  'user_portfolio_projects'
];

/**
 * Open or create IndexedDB instance
 */
function openDatabase(): Promise<IDBDatabase | null> {
  if (typeof window === 'undefined' || !window.indexedDB) {
    return Promise.resolve(null);
  }

  return new Promise((resolve) => {
    try {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        }
      };

      request.onsuccess = (event) => {
        resolve((event.target as IDBOpenDBRequest).result);
      };

      request.onerror = () => {
        resolve(null);
      };
    } catch {
      resolve(null);
    }
  });
}

/**
 * Read custom projects from all available browser storage sources
 */
export async function getStoredProjects(): Promise<PortfolioProject[]> {
  const projectsMap = new Map<string, PortfolioProject>();

  // 1. Try reading from primary IndexedDB
  try {
    const db = await openDatabase();
    if (db) {
      await new Promise<void>((resolve) => {
        try {
          const transaction = db.transaction([STORE_NAME], 'readonly');
          const store = transaction.objectStore(STORE_NAME);
          const request = store.getAll();

          request.onsuccess = () => {
            if (Array.isArray(request.result)) {
              request.result.forEach((p: PortfolioProject) => {
                if (p && p.id && (p.thumbnail || p.title)) {
                  projectsMap.set(p.id, p);
                }
              });
            }
            resolve();
          };

          request.onerror = () => resolve();
        } catch {
          resolve();
        }
      });
    }
  } catch (err) {
    console.warn('IndexedDB read error:', err);
  }

  // 2. Fallback / supplementary check across localStorage keys
  for (const key of LOCAL_STORAGE_KEYS) {
    try {
      const raw = localStorage.getItem(key);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          parsed.forEach((p: PortfolioProject) => {
            if (p && p.id && !projectsMap.has(p.id) && (p.thumbnail || p.title)) {
              projectsMap.set(p.id, p);
            }
          });
        }
      }
    } catch {
      // ignore JSON parse or localStorage security errors
    }
  }

  return Array.from(projectsMap.values());
}

/**
 * Save or update a project in both IndexedDB and LocalStorage
 */
export async function saveProject(project: PortfolioProject): Promise<void> {
  // Save to IndexedDB
  try {
    const db = await openDatabase();
    if (db) {
      await new Promise<void>((resolve) => {
        try {
          const transaction = db.transaction([STORE_NAME], 'readwrite');
          const store = transaction.objectStore(STORE_NAME);
          store.put(project);
          transaction.oncomplete = () => resolve();
          transaction.onerror = () => resolve();
        } catch {
          resolve();
        }
      });
    }
  } catch (err) {
    console.warn('IndexedDB write error:', err);
  }

  // Save to localStorage
  try {
    const current = await getStoredProjects();
    const updated = [project, ...current.filter((p) => p.id !== project.id)];
    localStorage.setItem(LOCAL_STORAGE_KEYS[0], JSON.stringify(updated));
  } catch {
    // quota exceeded or unavailable
  }
}

/**
 * Delete a custom project from storage
 */
export async function deleteStoredProject(id: string): Promise<void> {
  // Delete from IndexedDB
  try {
    const db = await openDatabase();
    if (db) {
      await new Promise<void>((resolve) => {
        try {
          const transaction = db.transaction([STORE_NAME], 'readwrite');
          const store = transaction.objectStore(STORE_NAME);
          store.delete(id);
          transaction.oncomplete = () => resolve();
          transaction.onerror = () => resolve();
        } catch {
          resolve();
        }
      });
    }
  } catch (err) {
    console.warn('IndexedDB delete error:', err);
  }

  // Delete from localStorage
  try {
    for (const key of LOCAL_STORAGE_KEYS) {
      const raw = localStorage.getItem(key);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          const filtered = parsed.filter((p: PortfolioProject) => p.id !== id);
          localStorage.setItem(key, JSON.stringify(filtered));
        }
      }
    }
  } catch {
    // ignore
  }
}
