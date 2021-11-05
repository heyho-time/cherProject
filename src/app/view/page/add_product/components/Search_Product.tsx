import React from 'react';
import styled from 'styled-components';

export default function Search_Product() {
    return (
        <Container>
            <Wrap>
                <input type="text" placeholder="Search Product Name or SKU"></input>
                <button>Add Product</button>
            </Wrap>
        </Container>
    );
}

const Container = styled.div`

  width: 100%;
  height: 80px;
  padding: 20px 64px;
  background-color: #f7f7f7;

    input {
        width: 300px;
        height: 40px;
        margin-right: 20px;
        padding: 12px 65px 12px 18px;
        border-radius: 4px;
        box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
        background-color: #fff;
        }

    button {
        width: 126px;
        height: 40px;
        border-radius: 4px;
        background-color: #7770ff;
        color: white;
    }
`;

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;