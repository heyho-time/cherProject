import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface CategoryListItemInterface {
    id: string;
    name: string;
    count?: number;
}

const CategoryListItem : React.FC<CategoryListItemInterface> = (props) => {
    return (
        <CategoryListItemContainer>
            <StyledLink to={{pathname: `/edit_category/${props.id}`, state: {categoryId: props.id}}}>
                <CategoryName>{props.name}</CategoryName>
                <AmountOfProducts>{props.count} products</AmountOfProducts>
            </StyledLink>
        </CategoryListItemContainer>
    )
}

const CategoryListItemContainer = styled.div`{
    display: flex;
    padding: 30px 25px;
    border-bottom: 1px solid #eaeaea;
    font-size: 17px;
    cursor: pointer;
}`

const StyledLink = styled(Link)`{
    display: flex;
    width: 100%;
    text-decoration: none;
    color: #58606e;
}`


const CategoryName = styled.div`{
    width: 40%;
}`

const AmountOfProducts = styled.div`{
    flex: 1;
}`

export default CategoryListItem;