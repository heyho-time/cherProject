import React, {useState, useEffect} from "react";
import styled from "styled-components";

import * as Entity from "domain/entity";
import container from "injector";
import {CheckoutViewModel} from '../../../../view-model';

import ProductView from "./ProductView";
import CartView from "../components/Cart/CartView";

const vm: CheckoutViewModel = container.get<CheckoutViewModel>("CheckoutViewModel");

const CheckoutView : React.FC = () => {
    const [productList, setProductList] = useState<Entity.Product[]>([]);
    const [searchInputStatus, setSearchInputStatus] = useState<boolean>(false);

    useEffect(() => {
        vm.getProductList()
        .then(res => {
            console.log(res);
            setProductList(res);
        });
    }, [searchInputStatus])

    const getClickedSearchedProduct = (productId : number) => {
        setProductList(productList.filter((item) => item.id === productId));   
    }

    const getSearchInput = (user : string) => {
        if(user.length < 1) {
            setSearchInputStatus(!searchInputStatus);
        }
    }

    const getCategoryFilteredItems = (categoryId : number) => {
        setProductList(productList.filter(item => item.productCategory[0]?.category.id === categoryId));
    }
    
    return (
        <>
            <CheckoutViewContainer>
                <Column>
                    <ProductView 
                        productList={productList}
                        getClickedSearchedProduct={getClickedSearchedProduct} 
                        getSearchInput={getSearchInput} 
                        getCategoryFilteredItems={getCategoryFilteredItems}
                    />
                    <CartView />
                </Column>
            </CheckoutViewContainer>
        </>
    )
}

const CheckoutViewContainer = styled.div`{
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #f7f7f7;
}`

const Column = styled.div`
    display: flex;
`

export default CheckoutView;