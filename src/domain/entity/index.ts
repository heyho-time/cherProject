export interface User {
    id?: string;
    email: string;
    password: string | null;
}

export interface Product {
    id : string;
    image : string[];
    title : string;
    categoryIds : string[];
    productDetail?: ProductDetail;
}

export interface ProductDetail {
    price : number;
    description : string;
    state?: ProductState;
    option?: Option[];
    inventory? : Inventory;
    category?: Category;
}

export interface ProductState {
    tax: boolean;
    soldOut: boolean;
    avail: number;
}

export interface Category {
    id: string;
    name: string;
    productIds?: string[];
}

export interface Category {
    id: string;
    name: string;
    productIds?: string[];
}

export interface Inventory {
    stock: number;
    sku: string;
}

export interface Option {
    id: string;
    name?: string;
    tag: Tag[];
}

export interface Tag {
    id: string;
    name?: string;
}

export interface Cart {
    id: string;
    productId?: string;
    image?: string[];
    title?: string;
    price?: number;
    quantity?: number;
    option?: Option[];
}