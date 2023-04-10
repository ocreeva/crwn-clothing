import { IAsyncState } from "../async";

export interface ICategory {
    id: string;
    imageUrl: string;
    title: string;
}

export interface ICategoriesState {
    data: Record<string, ICategory>;
    async: IAsyncState;
}
