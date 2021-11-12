import React from 'react';
import styled from 'styled-components';
import Items from './Items';
import * as Entity from "domain/entity";

interface ProductList {
    products: Entity.Product[];
}

const BackGround = styled.div`
    margin: 0 64px;
    border-radius: 5px;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.1);
`;

const TableHead = styled.div`
    display: flex;
    /* justify-content: space-evenly; */
    padding: 22px 0 22px 90px;
    margin-top: 3px;
    background-color: white;
    color: #58606e;
`;

const Column = styled.div`
    display: flex;
    align-items: center;
    width: 600px;
`;

const ProductList :React.FC<ProductList>=({products})=> {

    return (
        <BackGround>
                <TableHead>
                    <Column>Product Name</Column>
                    <Column>Quantity</Column>
                    <Column>Category</Column>
                </TableHead>
                {products.map((product) => {
                    return(
                        <Items key={product.id} product={product} />
                    );
                })}
        </BackGround>
    );
};
export default ProductList;