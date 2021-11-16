import React from 'react';
import styled from 'styled-components';
import *as Entity from 'domain/entity';
import { useHistory } from 'react-router';

interface ItemsProps {
    product: Entity.Product;
}

const Items:React.FC<ItemsProps>= (props)=> {
    const history = useHistory();

    return (
    <List onClick={()=>{history.push("/editproduct");}}>
        <img src={props.product.image[0]}/>
        <Column>{props.product.title}</Column>
        <Column>{props.product.productDetail.inventory.stock}</Column>
        <Column>{props.product.productDetail.category.name}</Column>
    </List>
    );
};

export default Items;

const List = styled.div`
    display: flex;
    /* justify-content: space-evenly; */
    padding: 22px 0;
    margin-top: 3px;
    background-color: white;
    color: #58606e;
    cursor: pointer;

    img {
        margin: 0 20px;
        width: 50px;
        height: 50px;
        object-fit: cover;
    }
`;

const Column = styled.div`
    display: flex;
    align-items: center;
    width: 600px;
`;
