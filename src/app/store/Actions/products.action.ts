import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { ProductListItem } from "../../types/products.type";

export const fetchProductsAction = createActionGroup({
    source : "Get_Products API",
    events : {
        'Hit' : emptyProps(),
        'Success' : props<{payload : ProductListItem[]}>(),
        'Error' : emptyProps()
    }
})

