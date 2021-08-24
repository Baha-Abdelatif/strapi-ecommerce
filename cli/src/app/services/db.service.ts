import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get<any>('http://localhost:1337/products');
  }
  getCategories() {
    return this.http.get<any>('http://localhost:1337/categories').pipe(
      tap((data) => {
        // console.log(data);
      }),
      map((datas) => {
        const categories = datas.map((category: any) => {
          const obj = { id: category.id, name: category.name };
          return obj;
        });
        return categories;
      })
    );
  }
}
