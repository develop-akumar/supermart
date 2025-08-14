import { Injectable } from '@angular/core';
import { ProductListItem } from '../../types/products.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private http: HttpClient) {
    console.log('ProductsService started = ');
  }

  // getProductsList(): Observable<ProductListItem[]> {
  //   return this.http.get<ProductListItem[]>('http://localhost:5000/products');

  // }

  getProductsList() {
    return [];
  }
}
