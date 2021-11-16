import React, { useState } from "react";
import styled from "styled-components";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import * as Entity from "domain/entity";

interface CartBoxInterface {
    isClearBtnClicked: boolean;
}

const CartBox : React.FC<CartBoxInterface> = (props) => {
    const [cartList, setCartList] = useState<Entity.Cart[]>([]);

    const getCartList = (cartList : Entity.Cart[]) => {
        setCartList(cartList);
    }

    return (
        <CartBoxContainer>
            <CartList isClearBtnClicked={props.isClearBtnClicked} getCartList={getCartList}/>
            <CartTotal acting="adding" cartList={cartList}/>
        </CartBoxContainer>
    )
}

const CartBoxContainer = styled.div`{
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    background-color: #ffffff;
}`


export default CartBox;