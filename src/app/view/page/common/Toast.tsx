import React from "react";
import styled, { keyframes } from "styled-components";
import closeIcon from "../../assets/images/close-primary.png";

interface ToastInterface {
    getToastStatus: (status: boolean) => void;
}

const Toast: React.FC<ToastInterface> = (props) => {
    return (
        <ToastContainer>
            Product has been added!
            <img src={closeIcon} onClick={() => props.getToastStatus(false)} />
        </ToastContainer>
    )
}

const ToastFade = keyframes`
    from {
        bottom: 20px;
        opacity: 0;
    } to {
        bottom: 40px;
        opacity: 1;
    }
`

const ToastContainer = styled.span`
    display: flex;
    position: absolute;
    left: 42%;
    padding: 20px;
    border-radius: 8px;
    font-family: NanumSquare_acR;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    animation-name: ${ToastFade};
    animation-duration: 0.3s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;

    img {
        width: 15px;
        height: 15px;
        margin-left: 10px;
        cursor: pointer;
    }
`

export default Toast;