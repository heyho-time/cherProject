import React, {useState, useEffect} from "react";
import styled from "styled-components";

import * as Entity from "domain/entity";
import container from "injector";
// import {ProductViewModel} from '../../../../view-model';
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
            setProductList(res);

        });
    }, [searchInputStatus]);

    const getClickedSearchedProduct = (productId : string) => {
        setProductList(productList.filter((item) => item.id === productId));
    };

    const getSearchInput = (user : string) => {
        if(user.length < 1) {
            setSearchInputStatus(!searchInputStatus);
        }
    };

    const getCategoryFilteredItems = (categoryId : string) => {
        setProductList(productList.filter(item => item.categoryIds.includes(categoryId)));
    };

    return (
        <>
            <CheckoutViewContainer>
            <ProductView
                    productList={productList}
                    getClickedSearchedProduct={getClickedSearchedProduct}
                    getSearchInput={getSearchInput}
                    getCategoryFilteredItems={getCategoryFilteredItems}
                />
                <CartView />
            </CheckoutViewContainer>
        </>
    );
};

const CheckoutViewContainer = styled.div`
    display: flex;
    padding: 0 64px 26px 64px;
    background-color: #f7f7f7;
`;

export default CheckoutView;