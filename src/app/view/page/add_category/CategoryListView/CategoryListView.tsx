import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import * as Entity from "domain/entity";
import container from "injector";
import { CategoryListViewModel } from '../../../../view-model';

import ProductCategory from "../../common/ProductCategory";
import CategoryListItem from "./CategoryListItem";

const vm: CategoryListViewModel = container.get<CategoryListViewModel>("CategoryListViewModel");

const CategoryListView : React.FC = () => {
    const [ categoryList, setCategoryList ] = useState<Entity.Category[]>([]);
    const [ searchInput, setSearchInput ] = useState<string>("");

    const getSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    }

    const filteredList = categoryList.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()));
    
    useEffect(() => {
        vm.getCategoryList()
        .then(res => setCategoryList(res))
        .catch(err => console.log("error"));
    }, []);
    
    return (
        <CategoryListViewContainer>
            <ProductCategory />
            <Header>
                <SearchArea>
                    <SearchProduct placeholder="Search Category Name" onChange={getSearchInput} />
                </SearchArea>
                <Link to="/add_category"><BtnAddCategory>Add Category</BtnAddCategory></Link>
            </Header>
            <CategoryList>
                <Title>
                    <CategoryName>Category Name</CategoryName>
                    <AmountOfProducts>Amount of Products</AmountOfProducts>
                </Title>
                {filteredList.map(item => {
                    return <CategoryListItem key={item.id} id={item.id} name={item.name} products={item.products}/>
                })}
            </CategoryList>
        </CategoryListViewContainer>
    )
}

const CategoryListViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f7f7f7;
    height: 100vh;
`

const Header = styled.div`{
    display: flex;
    justify-content: space-between;
    padding: 20px 75px;
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

const CategoryList = styled.div`{
    margin: 0 75px;
    background-color: #ffffff;
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
}`

const Title = styled.div`{
    display: flex;
    padding: 25px;
    border-bottom: 1px solid #eaeaea;
    font-size: 17px;
    color: #58606e;
    font-family: NanumSquare_acB;
}`

const BtnAddCategory = styled.button`{
    position: relative;
    padding: 11px 16px;
    border-radius: 4px;
    background-color: #7770ff;
    font-family: NanumSquare_acR;
    color: #fff;
    font-size: 17px;
    cursor: pointer;
}`

const CategoryName = styled.div`{
    width: 40%;
}`

const AmountOfProducts = styled.div`{
    flex: 1;
}`

export default CategoryListView;