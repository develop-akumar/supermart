import { Component } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
// import { Observable } from 'rxjs';
import { ProductListItem } from '../../types/products.type';
import { Store } from '@ngrx/store';
// import { fetchProductsAction } from '../../store/Actions/products.action';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProductsService],
})
export class ProductsComponent {
  products?: ProductListItem[];

  constructor(
    private productsService: ProductsService
    // private store: Store<{ products: ProductListItem[] }>
  ) {
    // this.store.dispatch(fetchProductsAction.hit());

    // this.productsService.getProductsList().subscribe((res) => {
    //   console.log('res = ', res);
    //   this.products = res;
    // });

    // this.products = this.productsService.getProductsList();
    this.products = [
      { id: 1, product_name: 'Jacket', product_image: 'shop-1', price: 100 },
      { id: 2, product_name: 'Purse', product_image: 'shop-2', price: 25 },
      { id: 3, product_name: 'Dress', product_image: 'shop-3', price: 455 },
      {
        id: 4,
        product_name: 'Denim Jeans',
        product_image: 'shop-4',
        price: 1100,
      },
      {
        id: 5,
        product_name: 'Laced Boots',
        product_image: 'shop-5',
        price: 2500,
      },
      { id: 6, product_name: 'Back-Pack', product_image: 'shop-6', price: 600 }
    ];
  }
}
