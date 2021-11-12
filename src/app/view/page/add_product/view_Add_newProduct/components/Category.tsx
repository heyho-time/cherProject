import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 340px;
  margin: 16px 64px 0 16px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);
  background-color: #fff;

  input {
    width: 300px;
    height: 40px;
    margin: 16px 0 0;
    padding: 12px 0 12px 18px;
    border-radius: 4px;
    border: solid 1px #eaeaea;
    background-color: #fff;
  }
`;

const Category=()=> {
    return (
        <Container>
            <h3>Category</h3>
            <input type="text" placeholder="Search for categories" />
        </Container>
    );
};

export default Category;
