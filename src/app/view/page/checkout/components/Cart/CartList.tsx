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

    const getDeleteItemId = (cartId: number) => {
        const newList = cartList.filter(item => item.id !== cartId);
        setCartList(newList);

        vm.clickDeleteCartItem(cartId)
        .then(res => alert("해당 상품이 장바구니에서 삭제되었습니다."))
        .catch(err => alert("삭제 실패"));
    }

    useEffect(() => {
        vm.getCartList()
        .then(res => setCartList(res))
        .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        let idList : number[] = [];
        cartList.map(item => idList.push(item.id));

        if(props.isClearBtnClicked === true) {
           vm.clickDeleteCartItem("all")
           .then(res => alert("장바구니 상품이 전체 삭제되었습니다."))
           .catch(err => alert("삭제 실패"));

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
                            productId={item.product.id}
                            image={item.product.image} 
                            name={item.product.name} 
                            price={item.product.releasePrice} 
                            quantity={item.quantity} 
                            stock={item.product.quantity}
                            optionKeyword={item.optionKeyword} 
                            getDeleteItemId={getDeleteItemId}
                        />;
            }) : <EmptyCart />}
        </CartListContainer>
    )
}

const CartListContainer = styled.div`{
    min-height: 460px;
    overflow-x: scroll;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
}`

export default CartList;