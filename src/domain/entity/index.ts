export interface User {
    id?: string;
    email: string;
    password: string | null;
}

export interface Product {
    id : number;
    description : string;
    releasePrice : number;
    image : Image[];
    name : string;
    productCategory : productCategory[];
    quantity?: number;
    SKU: number;
    status: Status;
    options?: Options[];
}

export interface productCategory {
    id: number;
    category: Category;
}

export interface Category {
    id: number;
    name: string;
    count?: number;
}

export interface Image {
    id: number;
    imageUrl: string;
}

export interface Status {
    id: number;
    name: boolean;
}

export interface Options {
    id: number;
    name: string;
    keyword: Keyword[];
}

export interface Keyword {
    id: number;
    name: string;
}

export interface Cart {
    id: number;
    quantity: number;
    optionKeyword: string;
    product: {
        id : number;
        description : string;
        releasePrice : number;
        image : Image[];
        name : string;
        quantity: number;
        SKU: number;
        createdAt: string;
        updatedAt: string;
    }
}