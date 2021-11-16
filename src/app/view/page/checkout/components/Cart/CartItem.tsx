import React from "react";
import styled from "styled-components";
import * as Entity from "domain/entity";

import productImage from "../../../../assets/images/product.png";
import deleteIcon from "../../../../assets/images/close-primary.png"

interface CartItemInterface {
    id: string;
    image: string[];
    title: string;
    price: number;
    quantity: number;
    option: Entity.Option[];
    getDeleteItemId(cartId: string): void;
}

const CartItem : React.FC<CartItemInterface> = (props) => {
    return (
        <CartItemContainer>
            <ItemImage src={props.image[0]}/>
            <ItemInfo>
                <Name>{props.title}</Name>
                <Option>
                    {props.option.map((option, index) => {
                        return <span key={option.id}>{`${option.tag[0].name}${index !== props.option.length - 1 ? " / " : ""}`}</span>
                    })}
                </Option>
            </ItemInfo>
            <ItemOrder>
                <Price>{props.price.toLocaleString('en')}￦</Price>
                <Quantity>Qty: {props.quantity}</Quantity>
            </ItemOrder>
            <BtnDelete onClick={() => props.getDeleteItemId(props.id)}><DeleteIcon src={deleteIcon} /></BtnDelete>
        </CartItemContainer>
    )
}

const CartItemContainer = styled.div`{
    display: flex;
    margin: 15px;
}`

const ItemImage = styled.img`{
    display: flex;
    width: 70px;
    height: 70px;
    object-fit: cover;
}`

const ItemInfo = styled.div`{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 10px 14px;
}`

const Name = styled.span`{
    font-size: 18px;
    font-family: NanumSquare_acB;
}`

const Option = styled.span`{
    color: #374554;
    font-family: NanumSquare_acR;
}`

const ItemOrder = styled.div`{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px 14px;
}`

const Price = styled.span`{
    font-size: 18px;
    font-family: NanumSquare_acB;
}`

const Quantity = styled.span`{
    color: #374554;
    font-family: NanumSquare_acR;
}`

const BtnDelete = styled.button`{
    padding: 0 10px;
}`

const DeleteIcon = styled.img`{
    width: 18px;
    height: 18px;
    cursor: pointer;
}`


export default CartItem;