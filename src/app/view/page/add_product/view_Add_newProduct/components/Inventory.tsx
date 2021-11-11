import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 796px;
  margin: 16px 16px 16px 64px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);
  background-color: #fff;

  div {
      display: flex;
  }
`;

const InputWrap = styled.div`
    display: flex;
    flex-direction: column;

    p {
        font-family: NanumSquare_acR;
        font-size: 14px;
        color: #58606e;
    }

    input {
        width: 374px;
        height: 50px;
        margin: 8px 0 0;
        border-radius: 2px;
        border: solid 1px #eaeaea;

    }
`;

const CheckBox = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 20px 0 0;
`;

const Inventory= ()=> {
    return (
        <Container>
            <h3>Inventory</h3>
            <div>
                <InputWrap>
                    <p>SKU (Stock Keeping Unit)</p>
                    <input type="text" />
                </InputWrap>
                <InputWrap>
                    <p>Available</p>
                    <input type="text" />
                </InputWrap>
            </div>
            <CheckBox>
                <input type="checkbox" />
                <p>Continue selling when out of stock</p>
            </CheckBox>
        </Container>
    );
};

export default Inventory;