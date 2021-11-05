import React, {useState} from "react";
import styled from "styled-components";

import CartBox from "./CartBox";
import EditProduct from "./EditProduct";
import CompleteOrder from "./CompleteOrder";

const CartView : React.FC = () => {
    const [isClearBtnClicked, setisClearBtnClicked] = useState(false);

    return (
        <CartViewContainer>
            <Header>
                <BtnClear onClick={() =>setisClearBtnClicked(true)}>Clear</BtnClear>
            </Header>
            <CartBox isClearBtnClicked={isClearBtnClicked}/>
            {/* <EditProduct /> */}
            {/* <CompleteOrder /> */}
        </CartViewContainer>
    )
}

const CartViewContainer = styled.div`{
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 10px;
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