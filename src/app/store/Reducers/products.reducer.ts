import { createReducer, on } from '@ngrx/store';
import { ProductListItem } from '../../types/products.type';
import { fetchProductsAction } from '../Actions/products.action';

const initialProduct: ProductListItem[] = [];

export const productsReducer = createReducer(initialProduct,
    on(fetchProductsAction.success,
        (state, action)=> action.payload
    ),
    on(fetchProductsAction.error,
        ()=>[]
    )
);
