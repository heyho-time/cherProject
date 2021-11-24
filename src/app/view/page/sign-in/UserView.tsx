import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import container from "injector";
import { UserViewModel } from "app/view-model";

const vm: UserViewModel = container.get<UserViewModel>("UserViewModel");

const UserView: React.FC = () => {
    const history = useHistory();
    const [showAlert, setShowAlert] = useState(false);
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const getInputData = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const handleSignInClick = () => {
        vm.clickSignIn(inputs)
        .then(res => {
            localStorage.setItem("token", JSON.stringify(res));
            history.push("/checkout");
        })
        .catch(error => {
            console.log(error);
            setShowAlert(true);
        });
    }

    const {email, password} = inputs;
    const isBtnActivate = email.includes("@") && password.length > 5;

    return (
        <LoginView>
            <LoginBox>
                <Logo>POINT OF SALE</Logo>
                <Title>Sign In</Title>
                <Description>Welcome to the Point of Sale app!</Description>
                <InputBox>
                    <Form type="text" name="email" placeholder="E-mail" onChange={getInputData}/>
                    <Label htmlFor="email">E-mail</Label>
                </InputBox>
                <InputBox>
                    <Form type="password" name="password" placeholder="Password" onChange={getInputData}/>
                    <Label htmlFor="email">Password</Label>
                </InputBox>
                <Alert showAlert={showAlert ? "true" : "false"}> Incorret e-mail address or password.</Alert>
                <BtnSignIn color={isBtnActivate ? "true" : "false"} onClick={handleSignInClick} disabled={!isBtnActivate}>Sign In</BtnSignIn>
            </LoginBox>
        </LoginView>
    )
};

const LoginView = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #f7f7f7;
`

const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);
`

const Logo = styled.h1`
    font-family: Druk;
    font-size: 40px;
    font-weight: bold;
    font-style: italic;
    color: #7770ff;
`

const Title = styled.h2`
    margin-top: 36px;
    font-family: NanumSquare_acEB;
    font-size: 30px;
    color: #374554;
`

const Description = styled.span`
    margin-top: 8px;
    line-height: 1.5;
    font-family: NanumSquare_acR;
    font-size: 14px;
    color: #5a5a5a;
`

const InputBox = styled.div`
    position: relative;
    margin-top: 20px;
`

const Form = styled.input`
    width: 320px;
    padding: 18px 16px 18px 16px;
    border: solid 1px #eaeaea;
    border-radius: 2px;
    font-size: 16px;
    color: #374554;
    background: transparent;

    ::placeholder {
        color: transparent;
    }

    :placeholder-shown + label {
        position: absolute;
        top: 10px;
        left: 16px;
        margin-top: 10px;
        color: #8a8a8a;
    }

    :not(:placeholder-shown) {
        padding: 26px 16px 10px 16px;
    }

    :not(:placeholder-shown) + label {
        position: absolute;
        top: 0px;
        left:16px;
        font-size: 10px;
        color: #7770ff;
        pointer-events: none;
        transition: all 0.2s ease ;
    }

    :focus {
        padding: 26px 16px 10px 16px;
        border: 1px solid #7770ff;
    }

    :focus + label {
        position: absolute;
        top: 0;
        left:16px;
        font-size: 10px;
        color: #7770ff;
        pointer-events: none;
        transition: all 0.2s ease ;
    }
`

const Label = styled.label`
    position: absolute;
    top: 10px;
    left: 16px;
    margin-top: 10px;
    color: #8a8a8a;
`

const Alert = styled.div<{showAlert : string}>`
    margin-top: 8px;
    font-family: NanumSquare_acR;
    font-size: 12px;
    color: #e02020;
    visibility: ${({showAlert}) => showAlert === "true" ? "visible" : "hidden"};
`

const BtnSignIn = styled.button`
    width: 100%;
    margin-top: 15px;
    padding: 15px 107px 15px 106px;
    border-radius: 4px;
    font-size: 16px;
    color: #fff;
    background-color: ${({color}) => color === "true" ? "#7770ff" : "#e0e0e3"};
    cursor: pointer;
`



export default UserView;