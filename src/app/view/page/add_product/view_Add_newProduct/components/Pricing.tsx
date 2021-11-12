import React from 'react';
import styled from 'styled-components';

export default function Pricing() {
    return (
        <Container>
            <h3>Pricing</h3>
            <InputWrap>
                <input type="text" placeholder="0" />
                <div>₩</div>
            </InputWrap>
            <CheckBox>
                <input type="checkbox" />
                <p>Charge tax on this item(VAT)</p>
            </CheckBox>
        </Container>
    );
}

const Container = styled.div`
  width: 796px;
  margin: 16px 16px 16px 64px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);
  background-color: #fff;
`;

const InputWrap = styled.div`
position: relative;

input {
    width: 756px;
    height: 50px;
    margin: 8px 0 0;
    padding: 16px;
    border-radius: 4px;
    border: solid 1px #eaeaea;
    color: #8a8a8a;
    font-family: NanumSquare_acR;
    font-size: 16px;
  }

div {
    position: absolute;
    right: 13px;
    top: 25px;
    color: #8a8a8a;
    font-family: NanumSquare_acR;
    font-size: 16px;
}
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px 0 0;

  input {
    margin-right: 10px;
    width: 21px;
    height: 21px;
    object-fit: contain;
  };

  p {
    width: 300px;
    height: 18px;
    font-family: NanumSquare_acR;
    font-size: 16px;
    color: #58606e;
  }
`;