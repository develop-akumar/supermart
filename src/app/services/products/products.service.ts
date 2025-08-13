import { Injectable } from '@angular/core';
import { ProductListItem } from '../../types/products.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ProductsService {
  constructor(private http: HttpClient) {
    console.log('abc = ');
  }

  getProductsList(): Observable<ProductListItem[]> {
    let a = this.http.get<ProductListItem[]>('http://localhost:5000/products');
    console.log('get prod = a');
    return a
  }
}
