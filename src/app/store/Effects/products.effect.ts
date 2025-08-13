import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from '../../services/products/products.service';
import { fetchProductsAction } from '../Actions/products.action';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {
    // console.log('products effect started = ');
    // this.productsService.getProductsList().subscribe((res) => {
    //   console.log('res = ', res);
    // });
  }

  // loadProducts$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(fetchProductsAction.hit),
  //     exhaustMap(() =>
  //       this.productsService.getProductsList().pipe(
  //         map((product: any) =>
  //           fetchProductsAction.success({ payload: product })
  //         ),
  //         catchError((e) => of(fetchProductsAction.error()))
  //       )
  //     )
  //   )
  // );

  
}
