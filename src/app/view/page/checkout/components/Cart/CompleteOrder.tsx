import React from "react";
import styled from "styled-components";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import confettiIcon from "../../../assets/images/confetti.png";

const CompleteOrder : React.FC = () => {
 return (
     <CompleteOrderContainer>
         <Header>
             <h1>Sales Complete! <img src={confettiIcon} /></h1>
             <OrderNumber># 00001</OrderNumber>
         </Header>
         <CartList />
         <CartTotal acting="complete" />
     </CompleteOrderContainer>
 )
}

const CompleteOrderContainer = styled.div`{
    height: 777px;
    font-size: 13px;
    background-color: #ffffff;
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

export default CompleteOrder;