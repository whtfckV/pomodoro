import { useState, useEffect, useCallback } from 'react';

export function useIndexedDB(databaseName: string, storeName: string) {
  const [db, setDb] = useState<IDBDatabase | null>(null);

  // Инициализация базы данных
  useEffect(() => {
    const openRequest = indexedDB.open(databaseName, 1);

    openRequest.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
      }
    };

    openRequest.onsuccess = () => {
      setDb(openRequest.result);
    };

    openRequest.onerror = () => {
      console.error('Error opening IndexedDB:', openRequest.error);
    };

    return () => {
      db?.close();
    };
  }, [databaseName, storeName]);

  // Добавление данных
  const addItem = useCallback(
    (item: Record<string, any>): Promise<IDBValidKey> => {
      return new Promise((resolve, reject) => {
        if (!db) return reject('Database not initialized');

        const transaction = db.transaction(storeName, 'readwrite');
        const store = transaction.objectStore(storeName);
        const request = store.add(item);

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
    },
    [db, storeName]
  );

  // Получение всех данных
  const getAllItems = useCallback((): Promise<any[]> => {
    return new Promise((resolve, reject) => {
      if (!db) return reject('Database not initialized');
      const transaction = db.transaction(storeName, 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }, [db, storeName]);

  // Обновление данных
  const updateItem = useCallback(
    (item: Record<string, any>): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (!db) return reject('Database not initialized');
        const transaction = db.transaction(storeName, 'readwrite');
        const store = transaction.objectStore(storeName);
        const request = store.put(item);

        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      });
    },
    [db, storeName]
  );

  // Удаление данных
  const deleteItem = useCallback(
    (id: IDBValidKey): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (!db) return reject('Database not initialized');
        const transaction = db.transaction(storeName, 'readwrite');
        const store = transaction.objectStore(storeName);
        const request = store.delete(id);

        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      });
    },
    [db, storeName]
  );

  return {
    addItem,
    getAllItems,
    updateItem,
    deleteItem,
  };
}
