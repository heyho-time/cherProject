import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import * as Entity from "domain/entity";

interface CartBoxInterface {
    isClearBtnClicked: boolean;
    getCartList(cartList: Entity.Cart[]): void;
    clickBtnCheckout(): void;
}

const CartBox : React.FC<CartBoxInterface> = (props) => {
    const [cartList, setCartList] = useState<Entity.Cart[]>([]);

    const getCartList = (cartList : Entity.Cart[]) => {
        setCartList(cartList);
    }

    useEffect(() => {
        props.getCartList(cartList);
    }, [cartList])

    return (
        <CartBoxContainer>
            <CartList isClearBtnClicked={props.isClearBtnClicked} getCartList={getCartList} />
            <CartTotal acting="adding" cartList={cartList} clickBtnCheckout={props.clickBtnCheckout} />
        </CartBoxContainer>
    )
}

const CartBoxContainer = styled.div`{
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 89vh;
    border-radius: 4px;
    background-color: #ffffff;
}`


export default CartBox;