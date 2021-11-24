import React, {useState} from "react";
import styled from "styled-components";

import CartBox from "./CartBox";
import CompleteOrder from "./CompleteOrder";
import * as Entity from "domain/entity";

import container from "injector";
import { CheckoutViewModel } from "app/view-model";

const CartView : React.FC = () => {
    const [ isClearBtnClicked, setisClearBtnClicked ] = useState(false);
    const [cartList, setCartList] = useState<Entity.Cart[]>([]);
    const [ isbtnCheckoutClicked, setIsBtnCheckoutClicked ] = useState<boolean>(false);
    
const vm: CheckoutViewModel = container.get<CheckoutViewModel>("CheckoutViewModel");
    const getCartList = (cartList : Entity.Cart[]) => {
        setCartList(cartList);
    }
    
    const clickBtnCheckout = () => {
        alert("주문이 완료되었습니다.");
        setCartList([]);
        window.location.replace('/checkout');
        setIsBtnCheckoutClicked(true);
    }

    return (
        <CartViewContainer>
            <Header>
                <BtnClear onClick={() =>setisClearBtnClicked(true)}>Clear</BtnClear>
            </Header>
            {isbtnCheckoutClicked ? 
                <CompleteOrder cartList={cartList}/> : 
                <CartBox 
                    isClearBtnClicked={isClearBtnClicked} 
                    getCartList={getCartList}
                    clickBtnCheckout={clickBtnCheckout}
                />
            }
        </CartViewContainer>
    )
}

const CartViewContainer = styled.div`{
    display: flex;
    flex-direction: column;
    height: 88vh;
    flex: 1;
    padding-right: 20px;
}`

const Header = styled.div`{
    display: flex;
    justify-content: flex-end;
    padding: 20px 0; 
}`

const BtnClear = styled.div`{
    padding: 11px 16px;
    border-radius: 4px;
    border: solid 2px rgba(0, 0, 0, 0.1);
    font-family: NanumSquare_acB;
    color: #374554;
    cursor: pointer;
}`

export default CartView;