export class IndexedDBService {
  private dbName: string;
  private dbVersion: number;
  private storeName: string;
  private db: IDBDatabase | null = null;

  constructor(dbName: string, dbVersion: number, storeName: string) {
    this.dbName = dbName;
    this.dbVersion = dbVersion;
    this.storeName = storeName;
  }

  // Открытие базы данных
  openDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion);

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: "id", autoIncrement: true });
        }
      };

      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  }

  // Добавление данных
  addData(data: unknown): Promise<IDBValidKey> {
    return new Promise(async (resolve, reject) => {
      if (!this.db) await this.openDB();

      const transaction = this.db!.transaction(this.storeName, "readwrite");
      const store = transaction.objectStore(this.storeName);
      const request = store.add(data);

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  // Получение всех данных
  getAllData(): Promise<unknown[]> {
    return new Promise(async (resolve, reject) => {
      if (!this.db) await this.openDB();

      const transaction = this.db!.transaction(this.storeName, "readonly");
      const store = transaction.objectStore(this.storeName);
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  // Удаление данных по ключу
  deleteData(id: IDBValidKey): Promise<void> {
    return new Promise(async (resolve, reject) => {
      if (!this.db) await this.openDB();

      const transaction = this.db!.transaction(this.storeName, "readwrite");
      const store = transaction.objectStore(this.storeName);
      const request = store.delete(id);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }
}
