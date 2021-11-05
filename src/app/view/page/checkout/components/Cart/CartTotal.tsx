import React, { useState, useEffect } from "react";
import styled from "styled-components";
import addIcon from "../../../../assets/images/additional-idle.png";
import * as Entity from "domain/entity";

interface CartTotalProps {
    acting : string;
    cartList: Entity.Cart[];
}

const CartTotal : React.FC<CartTotalProps> = (props) => {
    const isActing = props.acting === "adding";
    const [ subPrice, setSubPrice ] = useState<number>(0);
    const [ tax, setTax ] = useState<number>(0);

    useEffect(() => {
        let subPrice : number = 0;
        props.cartList.forEach(item => subPrice += item.price!);
        setSubPrice(subPrice);
        setTax(subPrice * 0.1);
    }, [props.cartList]);
    
    return (
        <CartTotalContainer>
            <Column order="first">
                <Title add={props.acting}>{isActing ? "Add Discount" : "Discount"}</Title>
                <BtnAddDiscount>{isActing ? <AddIcon src={addIcon} /> : <Price>-</Price> }</BtnAddDiscount>
            </Column>
            <Column order="second">
                <SubColumn>
                    <Title add="normal">Subtotal</Title>
                    <Price>{subPrice.toLocaleString("en")}￦</Price>
                </SubColumn>
                <SubColumn>
                    <Title add="normal">Taxes (VAT)</Title>
                    <Price>{tax.toLocaleString("en")}￦</Price>
                </SubColumn>
            </Column>
            <Column order="third">
                <Title add="normal">Total</Title>
                <Price>{(subPrice + tax).toLocaleString("en")}￦</Price>
            </Column>
            <BtnCheckout acting={props.acting}>Checkout</BtnCheckout>
        </CartTotalContainer>
    )
}

const CartTotalContainer = styled.div`{
    padding: 0 20px;
    font-family: NanumSquare_acB;
    font-size: 18px;
}`

const Column = styled.div<{order : string}>`{
    display: flex;
    flex-direction: ${({order}) => order === "second" ?  "column" : "row"}
    justify-content: space-between;
    align-items: ${({order}) => order === "second" ?  "inherit" : "center"}
    padding: 20px 0;
    border-top: 2px solid #eaeaea;
}`

const Title = styled.span<{add : string}>`{
    color: ${({add}) => add === "adding" && "#7770ff"}
}`

const BtnAddDiscount = styled.button`{
    cursor: pointer;
}`

const AddIcon = styled.img`{
    width: 24px;
    height: 24px;
}`

const SubColumn = styled.div`{
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
}`

const Price = styled.div`{
    color: #374554;
}`

const BtnCheckout = styled.button<{acting : string}>`{
    display: ${({acting}) => acting === "complete" ? "none" : "block"}
    width: 100%;
    margin: 20px 0;
    padding: 15px 0;
    font-size: 17px;
    border-radius: 4px;
    background-color: #7770ff;
    color: #ffffff;
    cursor: pointer;
}`

export default CartTotal;