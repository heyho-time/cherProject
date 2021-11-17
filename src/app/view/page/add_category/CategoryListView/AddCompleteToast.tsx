import React from "react";
import styled from "styled-components";

interface AddCompleteToastInterface {
    toastStatus: boolean;
}

const AddCompleteToast : React.FC<AddCompleteToastInterface> = (props) => {
    return (
        <AddCompleteToastContainer isVisible={props.toastStatus}>
            Product 1 has been added!
        </AddCompleteToastContainer>
    )   
}

const AddCompleteToastContainer = styled.span<{isVisible: boolean}>`
    display: ${({isVisible}) => isVisible ? "block" : "none"};
    position: absolute;
    left: 42%;
    bottom: 50px;
    width: fit-content;
    padding: 18px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.8);
    font-family: NanumSquare_acR;
    font-size: 15px;
    color: #fff;
`

export default AddCompleteToast;