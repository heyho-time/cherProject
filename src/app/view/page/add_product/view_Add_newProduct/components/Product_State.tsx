import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 340px;
  margin: 39px 64px 16px 16px;
  padding: 20px 21px 20px 20px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);
  background-color: #fff;
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
    height: 18px;
    font-family: NanumSquare_acR;
    font-size: 16px;
    color: #58606e;
  }
`;

const Product_State= ()=> {
    return (
        <Container>
            <h3>Product State</h3>
            <CheckBox>
                <input type="checkbox" />
                <p>Sold out</p>
            </CheckBox>
        </Container>
    );
};

export default Product_State;