import React from 'react';
import styled from 'styled-components';

const List = styled.div`
    display: flex;
    /* justify-content: space-evenly; */
    padding: 22px 0;
    margin-top: 3px;
    background-color: white;
    color: #58606e;

    img {
        margin: 0 20px;
        width: 50px;
        height: 50px;
    }
`;

const Column = styled.div`
    display: flex;
    align-items: center;
    width: 600px;
`;

export default function Items() {
    return (
    <List>
        <img src=""/>
        <Column>Product Name</Column>
        <Column>Quantity</Column>
        <Column>Category</Column>
    </List>
    );
}
