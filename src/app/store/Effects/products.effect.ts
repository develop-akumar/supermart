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
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchProductsAction.hit),
      exhaustMap(() =>{
        let a = this.productsService.getProductsList()
        console.log('a = ', a);
        return a.pipe(
          map((product) => fetchProductsAction.success({ payload: product })),
          catchError((e) => of(fetchProductsAction.error()))
        )}
      )
    )
  );
}
