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
    productDetail: ProductDetail;
}

export interface ProductDetail {
    description : string;
    categoryIds : number[];
    inventory : Inventory;
    avail: number;
    state: string;
    option: Option[];
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