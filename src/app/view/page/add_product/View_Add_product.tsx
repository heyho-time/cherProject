import React from 'react';
import styled from 'styled-components';
import Nav from '../common/Nav';
import ProductCategory from '../common/ProductCategory';
import Search_Product from './components/Search_Product';
import ProductList from './components/productlist/ProductList';

const BackGround = styled.div`
    background-color: #f7f7f7;
    padding-bottom: 100px;
`;

export default function View_Add_product() {

    return (
        <BackGround>
            <Nav />
            <ProductCategory />
            <Search_Product />
            <ProductList />
        </BackGround>
    );
}
