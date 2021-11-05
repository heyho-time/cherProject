import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import * as Entity from "domain/entity";

const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 20px 64px;
  background-color: #f7f7f7;

    input {
        width: 300px;
        height: 40px;
        margin-right: 20px;
        padding: 12px 65px 12px 18px;
        border-radius: 4px;
        box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
        background-color: #fff;
        }

    button {
        width: 126px;
        height: 40px;
        border-radius: 4px;
        background-color: #7770ff;
        color: white;
    }
`;

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const SearchedItem = styled.div``;

interface ChangeInput {
    handleChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
    filteredProducts: Entity.Product[];
}

const Search_Product:React.FC<ChangeInput>=({handleChange, filteredProducts} : ChangeInput) =>{

    return (
        <Container>
            <Wrap>
                <input onChange={handleChange} type="text" placeholder="Search Product Name or SKU"></input>
                {filteredProducts.map(()=>{<SearchedItem>

                </SearchedItem>})}
                <Link to="/add_new_product"><button>Add Product</button></Link>
            </Wrap>
        </Container>
    );
};

export default Search_Product;