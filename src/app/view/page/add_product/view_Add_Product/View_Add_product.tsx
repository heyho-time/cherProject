import React,{useState, useEffect} from 'react';
import * as Entity from "domain/entity";
import styled from 'styled-components';
import Nav from '../../common/Nav';
import ProductCategory from '../../common/ProductCategory';
import Search_Product from '../components/Search_Product';
import ProductList from '../components/productlist/ProductList';
import container from "injector";
import {UserViewModel} from '../../../../view-model';

const BackGround = styled.div`
    background-color: #f7f7f7;
    padding-bottom: 100px;
`;

const vm: UserViewModel = container.get<UserViewModel>("UserViewModel");

export default function View_Add_product() {
    const [products, setProducts] = useState<Entity.Product[]>([]);
    const [searchedItem, setSearchedItem] = useState<string>("");
    // const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
         vm.list()
            .then((item)=>{
                setProducts(item);
            })
            .catch(()=>{
                alert("error");
            });
      }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchedItem(e.target.value);
    };
    const filteredProducts = products.filter((item) => {return item.title.toLowerCase().includes(searchedItem.toLowerCase());});
   console.log(filteredProducts);

    return (
        <BackGround>
            <Nav />
            <ProductCategory />
            <Search_Product handleChange={handleChange} filteredProducts={filteredProducts} />
            <ProductList products={products}/>
        </BackGround>
    );
}