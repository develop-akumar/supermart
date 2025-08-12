import { Component } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { Observable } from 'rxjs';
import { ProductListItem } from '../../types/products.type';
import { Store } from '@ngrx/store';
import { fetchProductsAction } from '../../store/Actions/products.action';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProductsService],
})
export class ProductsComponent {
  products?: Observable<ProductListItem>;
  constructor(private productsService: ProductsService, private store: Store) {
    this.store.dispatch(fetchProductsAction.hit());
  }
}
