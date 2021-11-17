import React, { useState, useEffect } from "react";
import styled from "styled-components";

import * as Entity from "domain/entity";
import container from "injector";
import { CheckoutViewModel } from "app/view-model";

import ProductList from "./ProductList";
import NoResult from "./NoResult";

const vm: CheckoutViewModel = container.get<CheckoutViewModel>("CheckoutViewModel");

interface ProductViewProps {
    productList : Entity.Product[];
    getClickedSearchedProduct(product : string) : void;
    getSearchInput(user : string) : void;
    getCategoryFilteredItems(categoryId : string) : void;
}

const ProductView : React.FC<ProductViewProps> = (props) => {
    const [searchedItemList, setSearchedItemList] = useState<Entity.Product[]>([]);
    const [showCategory, setShowCategory] = useState<boolean>(false);
    const [categoryList, setCategoryList] = useState<Entity.Category[]>([]);

    const filterProduct = (e : React.ChangeEvent<HTMLInputElement>) => {
        props.getSearchInput(e.target.value);
        const userInput = e.target.value.toLowerCase();
        const result = userInput ? props.productList.filter(item => item.title.toLowerCase().includes(userInput) || item.productDetail.inventory.sku.toLowerCase().includes(userInput)) : [];
        setSearchedItemList(result);
    }

    const clickAllCategories = () => {
        setShowCategory(!showCategory);
    }

    useEffect(() => {
        window.addEventListener("click", () => setSearchedItemList([]));
        vm.clickAllCategories()
        .then(res => setCategoryList(res));

        return () => window.removeEventListener('click', () => setSearchedItemList([]));
    }, [])

    return (
        <ProductViewContainer>
            <Header>
                <SearchArea>
                    <SearchProduct placeholder="Search Product Name or SKU" onChange={filterProduct} />
                    {searchedItemList.length ?
                        <SearchedList>
                        {searchedItemList.map(item => {
                            return <SearchedItem key={item.id} onClick={() => {
                                props.getClickedSearchedProduct(item.id);
                            }}>{item.title}</SearchedItem>;
                        })}
                        </SearchedList> : null
                    }
                    
                </SearchArea>
                <BtnShowCategories onClick={clickAllCategories}>
                    All Categories
                    <CategoryList isVisible={showCategory}>
                        {categoryList.map(item => {
                            return <CategoryItem key={item.id} onClick={() => props.getCategoryFilteredItems(item.id)}>{item.name}</CategoryItem>
                        })}
                    </CategoryList>
                </BtnShowCategories>
            </Header>
            {props.productList.length ? 
                <ProductList 
                    productList={props.productList} 
                /> : <NoResult/>}
        </ProductViewContainer>
    )
}

const ProductViewContainer = styled.div`{
    display: flex;
    flex-direction: column;
    height: 89vh;
}`

const Header = styled.div`{
    display: flex;
    justify-content: space-between;
    padding: 20px 15px;
}`

const SearchProduct = styled.input`{
    position: relative;
    width: 300px;
    padding: 12px 18px;
    border-radius: 4px;
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    font-size: 14px;
    font-family: NanumSquare_acB;
    color: #959595;
}`

const SearchArea = styled.div`{
    position: relative;
}`

const SearchedList = styled.ul`{
    position: absolute;
    top: 50px;
    right: 0;
    width: 300px;
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: 0 2px 12px 2px rgba(0, 0, 0, 0.2);
}`

const SearchedItem = styled.li`{
    padding: 16px;
    cursor: pointer;
}`

const BtnShowCategories = styled.button`{
    position: relative;
    padding: 11px 16px;
    border-radius: 4px;
    background-color: #7770ff;
    font-family: NanumSquare_acR;
    color: #fff;
    font-size: 17px;
    cursor: pointer;
}`

const CategoryList = styled.ul<{isVisible : boolean}>`{
    position: absolute;
    top: 50px;
    right: 0;
    display: ${({isVisible}) => isVisible ? "block" : "none"};
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: 0 2px 12px 2px rgba(0, 0, 0, 0.2);
}`

const CategoryItem = styled.li`{
    display: flex;
    justify-content: space-between;
    width: 200px;
    padding: 16px;
    font-size: 17px;
    color: #2e2f30;

    &:hover {
        color: #7770ff;
        background-color: #f1f0ff;
    }
}`

export default ProductView;