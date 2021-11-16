import React from 'react';
import styled from 'styled-components';

const Variants = () => {
    return (
        <Container>
            <h3>Variants</h3>
            <CheckBox>
                <input type="checkbox" />
                <p>This product has multiple options, like different sizes or colors</p>
            </CheckBox>
        </Container>
    );
};

export default Variants;

const Container = styled.div`
  width: 796px;
  margin: 16px 16px 0 64px;
  padding: 20px 28px 20px 20px;
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
