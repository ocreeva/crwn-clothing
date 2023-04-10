import type { IAsyncState } from "../async";

export interface IProduct {
    id: string;
    categoryId: string;
    imageUrl: string;
    name: string;
    price: number;
}

export interface IProductsState {
    data: Record<string, IProduct>;
    async: IAsyncState;
}
