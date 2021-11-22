import React from "react";
import styled from "styled-components";
import checkoutEmpty from "../../../../assets/images/checkout-empty.png";

const EmptyCart : React.FC = () => {
    return(
        <EmptyCartContainer>
            <img src={checkoutEmpty}/>
            <h3>Add a product to begin checkout</h3>
        </EmptyCartContainer>
    )
}

const EmptyCartContainer = styled.div`{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    img {
        width: 150px;
        height: 150px;
    }

    h3 {
        margin-top: 30px;
        font-family: NanumSquare_acB;
        font-size: 18px;
        color: #959595;
    }
}`

export default EmptyCart;