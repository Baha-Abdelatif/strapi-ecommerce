import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get<any>('http://localhost:1337/products');
  }
}
