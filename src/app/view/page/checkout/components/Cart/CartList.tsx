import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

import * as Entity from "domain/entity";
import container from "injector";
import { CheckoutViewModel } from "app/view-model";
import EmptyCart from "./EmtpyCart";

interface CartListInterface {
    isClearBtnClicked: boolean;
    getCartList(cartList: Entity.Cart[]): void;
}

const vm: CheckoutViewModel = container.get<CheckoutViewModel>("CheckoutViewModel");

const CartList : React.FC<CartListInterface> = (props) => {
    const [ cartList, setCartList ] = useState<Entity.Cart[]>([]);

    const getDeleteItemId = (cartId: string) => {
        const newList = cartList.filter(item => item.id !== cartId);
        setCartList(newList);

        vm.deleteCartItem({"id": cartId})
        .then(res => console.log("삭제 성공"))
        .catch(err => console.log("삭제 실패"));
    }

    useEffect(() => {
        vm.getCartList()
        .then(res => setCartList(res))
        .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        console.log("Dd");
        let idList : string[] = [];
        cartList.map(item => idList.push(item.id));

        if(props.isClearBtnClicked === true) {
            // vm.deleteCartItem({"id": idList})
            // .then(res => console.log("삭제 성공"))
            // .catch(err => console.log("삭제 실패"));
            setCartList([]);
        }        
    }, [props.isClearBtnClicked]);

    useEffect(() => {
        props.getCartList(cartList);
    }, [cartList])

    return(
        <CartListContainer>
            {cartList.length > 0 ? cartList.map(item => {
                return <CartItem 
                            key={item.id} 
                            id={item.id} 
                            image={item.image!} 
                            title={item.title!} 
                            price={item.price!} 
                            quantity={item.quantity!} 
                            option={item.option!} 
                            getDeleteItemId={getDeleteItemId} 
                        />;
            }) : <EmptyCart />}
        </CartListContainer>
    )
}

const CartListContainer = styled.div`{
    height: 445px;
    overflow-x: scroll;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
}`

export default CartList;