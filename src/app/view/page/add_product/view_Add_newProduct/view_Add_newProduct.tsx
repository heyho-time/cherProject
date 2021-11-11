import React from 'react';
import styled from 'styled-components';
import Head from './components/Head/Head';
import Title from './components/Title';
import Images from './components/Images';
import Pricing from './components/Pricing';
import Inventory from './components/Inventory';
import Variants from './components/Variants';
import Product_State from './components/Product_State';
import Category from './components/Category';

const Container = styled.div`
width:100%;
height:100%;
padding-bottom: 50px;
background-color: #f7f7f7;

h3 {
    margin: 0 0 2px 0;
        font-family: NanumSquare_acB;
        font-size: 16px;
        color: #374554;
}
`;

const view_Add_newProduct=()=> {
    return (
        <Container>
            <div>
                <Head />
                <Title />
                <Images />
                <Pricing />
                <Inventory />
                <Variants />
            </div>
            <div>
                <Product_State />
                <Category />
            </div>
        </Container>
    );
};

export default view_Add_newProduct;