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
      exhaustMap(() =>
        this.productsService.getProductsList().pipe(
          map((productsList) =>
            fetchProductsAction.success({ payload: productsList })
          ),
          catchError((e) => of(fetchProductsAction.error()))
        )
      )
    )
  );
}
