import React from "react";
import styled from "styled-components";

import * as Entity from "domain/entity";

import ProductItem from "./ProductItem";

interface ProductListProps {
    productList : Entity.Product[];
}

const ProductList : React.FC<ProductListProps> = (props) => {
    return(
        <ProductListContainer>
            {props.productList.map(item => {
                return <ProductItem key={item.id} itemInfo={item} />
            })}
        </ProductListContainer>
    )
}

const ProductListContainer = styled.div`{
    display: flex;
    flex-wrap: wrap;
    width: 1000px;
    padding: 0 10px;
    overflow-x: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
}`

export default ProductList;