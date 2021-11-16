import React from 'react';
import styled from 'styled-components';
import Title from './components/Title';
import Images from './components/Images';
import Pricing from './components/Pricing';
import Inventory from './components/Inventory';
import Variants from './components/Variants';
import ProductState from './components/ProductState';
import Category from './components/Category';
// import container from "injector";
// import {AddProductViewModel} from '../../../../view-model';

// const vm: AddProductViewModel = container.get<AddProductViewModel>("AddProductViewModel");

const EditProductView:React.FC=()=> {

    return (
        <Container>
            <Head>
            <p>Edit Product</p>
            <div>
                <CancelBtn>Cancel</CancelBtn>
                <SaveBtn>Save</SaveBtn>
            </div>
        </Head>
            <ProductInfo>
                <div>
                    <Title />
                    <Images />
                    <Pricing />
                    <Inventory />
                    <Variants />
                </div>
                <div>
                    <ProductState />
                    <Category />
                </div>
            </ProductInfo>
        </Container>
    );
};

export default EditProductView;

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 92px;
    padding: 28px 64px;
    background-color: white;

    p {
        font-family: NanumSquare_acEB;
        font-size: 20px;
    }

    div {
        display: flex;
    }
`;

const CancelBtn = styled.button`
    width: 80px;
    height: 36px;
    margin: 0 8px 0 0;
    padding: 10px 18px;
    border-radius: 4px;
    border: solid 1px #babfc3;
    font-family: NanumSquare_acB;
    font-size: 14px;
    color: #374554;
`;

const SaveBtn = styled.button`
    width: 80px;
    height: 36px;
    border-radius: 4px;
    font-family: NanumSquare_acB;
    font-size: 14px;
    background-color: #e0e0e3;
    color: white;
`;

const Container = styled.div`
    padding-bottom: 50px;
    width:100%;
    height:100%;
    background-color: #f7f7f7;

h3 {
    margin: 0 0 2px 0;
        font-family: NanumSquare_acB;
        font-size: 16px;
        color: #374554;
}
`;

const ProductInfo = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 auto;
`;