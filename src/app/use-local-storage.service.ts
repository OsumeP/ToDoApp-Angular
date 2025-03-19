import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseLocalStorageService {
  loading = signal(true);
  error = signal(false);

  constructor() {
  }

  getItem(itemName: string): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const itemsFromStorage = window.localStorage.getItem(itemName);
          if (itemsFromStorage) {
            resolve(JSON.parse(itemsFromStorage));
          } else {
            resolve(null);
          }
        } catch (error) {
          this.error.set(true);
          reject(error);
        } finally {
          this.loading.set(false);
        }
      });
    });
  }

  getLoading(){return this.loading}
  getError(){return this.error}

  saveItem(item: string, itemName: string){
    localStorage.setItem(itemName, item);
  }
}
