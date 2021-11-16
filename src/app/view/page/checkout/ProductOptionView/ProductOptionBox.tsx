import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import * as Entity from "domain/entity";

import ProductOption from "./ProductOption";
import backIcon from "../../../assets/images/arrow-left.png";

interface ProductOptionBoxInterface {
    itemInfo: Entity.Product;
}

const ProductOptionBox : React.FC<ProductOptionBoxInterface> = (props) => {
    return (
        <ProductBoxContainer>
            <Header>
                <Link to="/checkout">
                    <BtnBack><img src={backIcon}/></BtnBack>
                </Link>
            </Header>
            <ProductOption itemInfo={props.itemInfo} />
        </ProductBoxContainer>
    )
}

const ProductBoxContainer = styled.div`{
    display: flex;
    flex-direction: column;
    margin-right: 10px;
}`

const Header = styled.div`{
    display: flex;
    justify-content: space-between;
    padding: 30px 10px;
}`

const BtnBack = styled.button`{
    cursor: pointer;

    img {
        width: 20px;
        height: 20px;
    }
}`

export default ProductOptionBox;