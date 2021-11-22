import React from "react";
import styled from "styled-components";
import CartTotal from "./CartTotal";
import * as Entity from "domain/entity";
import confettiIcon from "../../../../assets/images/confetti.png";

interface CompleteOrderInterface {
    cartList: Entity.Cart[];
}

const CompleteOrder : React.FC<CompleteOrderInterface> = (props) => {
 return (
     <CompleteOrderContainer>
         <Header>
             <h1>Sales Complete! <img src={confettiIcon} /></h1>
             <OrderNumber># 00001</OrderNumber>
         </Header>
         {props.cartList.map(item => {
             return (
                 <CartItemContainer key={item.id}>
                    <Column>
                        <ItemImage src={item.image&&item.image[0]}/>
                        <ItemInfo>
                            <Name>{item.title}</Name>
                            <Option>
                                {item.option&&item.option.map((option, index) => {
                                    return <span key={option.id}>{`${option.tag[0].name}${index !== (item.option&&item.option.length - 1) ? " / " : ""}`}</span>
                                })}
                            </Option>
                        </ItemInfo>
                        <ItemOrder>
                            <Price>{item.price&&item.price.toLocaleString('en')}￦</Price>
                            <Quantity>Qty: {item.quantity}</Quantity>
                        </ItemOrder>
                    </Column>
                </CartItemContainer>
             )
         })}
         <CartTotal acting="done" cartList={props.cartList}/>
     </CompleteOrderContainer>
 )
}

const CompleteOrderContainer = styled.div`{
    height: 777px;
    font-size: 13px;
    background-color: #ffffff;
    justify-content: space-between;
}`

const Header = styled.div`{
    padding: 20px;

    h1 {
        display: flex;
        align-items: center;

        img {
            width: 24px;
            height: 24px;
        }
    }
}`

const OrderNumber = styled.p`{
    margin-top: 10px;
    font-family: NanumSquare_acR;
    font-size: 16px;
    color: #374554;
}`

const CartItemContainer = styled.div`{
    display: flex;
    margin: 15px;
    cursor: pointer;
}`

const Column = styled.div`{
    display: flex;
    width: 100%;
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
export default CompleteOrder;