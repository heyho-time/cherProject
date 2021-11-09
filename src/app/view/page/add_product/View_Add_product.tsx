import React from 'react';
import styled from 'styled-components';
import Nav from '../common/Nav';
import ProductCategory from '../common/ProductCategory';
import Search_Product from './components/Search_Product';
import ProductList from './components/productlist/ProductList';
import container from "injector";
import {UserViewModel} from '../../../view-model';

const BackGround = styled.div`
    background-color: #f7f7f7;
    padding-bottom: 100px;
`;

export default function View_Add_product() {

    const vm: UserViewModel = container.get<UserViewModel>("UserViewModel");

    const test = () => {
        vm.clickUser()
            .then((product)=>{
                console.log(product);
            })
            .catch(()=>{
                alert("error");
            });
    };

    return (
        <BackGround>
            <Nav />
            <ProductCategory />
            <Search_Product />
            <ProductList />
        </BackGround>
    );
}
