import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router";

import * as Entity from "domain/entity";

import ProductOptionBox from "./ProductOptionBox";
import CartView from "../components/Cart/CartView";

interface ProductOptionLocation {
    itemInfo: Entity.Product;
}

const ProductOptionView : React.FC<ProductOptionLocation> = (props) => {
    const locationState = useLocation<ProductOptionLocation>().state.itemInfo;
    
    return (
        <ProductOptionViewContainer>
            <ProductOptionBox itemInfo={locationState}/>
            <CartView />
        </ProductOptionViewContainer>
    )
}

const ProductOptionViewContainer = styled.div`{
    display: flex;
    padding: 0 64px 26px 64px;
    background-color: #f7f7f7;
}`

export default ProductOptionView;