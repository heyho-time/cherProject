import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import * as Entity from "domain/entity";

interface ProductItemProps {
    itemInfo : Entity.Product;
}

const ProductItem : React.FC<ProductItemProps> = (props) => {
    return (
        <StyledLink to={{pathname:`/product_option/${props.itemInfo.id}`, state: {itemInfo: props.itemInfo}}}>
            <ProductItemContainer>
                <ItemImage src={props.itemInfo.image[0]}/>
                <ItemName>{props.itemInfo.title}</ItemName>
            </ProductItemContainer>
        </StyledLink>
    )
}

const StyledLink = styled(Link)`{
    text-decoration: none;
}`

const ProductItemContainer = styled.div`{
    width: fit-content;
    height: fit-content;
    margin: 4px 8px;
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);
    cursor: pointer;
}`

const ItemImage = styled.img`{
    width: 200px;
    height: 210px;
    object-fit: cover;
    background-color: #f7f7f7;
}`

const ItemName = styled.div`{
    padding: 8px;
    font-family: NanumSquare_acB;
    font-size: 18px;
    color: #374554;
}`

export default ProductItem;