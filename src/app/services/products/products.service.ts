import { Injectable } from '@angular/core';
import { ProductListItem } from '../../types/products.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {
    console.log('abc = ');
  }

  getProductsList(): Observable<ProductListItem[]> {
    console.log('get prod = ', );
    return this.http.get<ProductListItem[]>('http://localhost:5000/products');
  }
}
