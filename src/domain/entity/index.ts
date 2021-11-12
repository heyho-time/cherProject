export interface User {
    userKey: string;
    email: string;
    password: string | null;
}

export interface Product {
    id : string;
    image : string[];
    price : number;
    title : string;
    categoryIds : number[];
    productDetail: ProductDetail;
}

export interface ProductDetail {
    description : string;
    category : Category;
    inventory : Inventory;
    avail: number;
    state: string;
    option: Option[];
}

export interface Category {
    id: number;
    name: string;
}

export interface Inventory {
    stock: number;
    sku : string;
}

export interface Option {
    id : string;
    name: string;
    tag: Tag[];
}

export interface Tag {
    id:string;
    name: string;
}