import React,{useState, useEffect} from 'react';
import * as Entity from "domain/entity";
import styled from 'styled-components';
import Nav from '../../common/Nav';
import ProductCategory from '../../common/ProductCategory';
import Search_Product from './components/Search_Product';
import ProductList from './components/productlist/ProductList';
import container from "injector";
import {ProductViewModel} from '../../../../view-model';

const vm: ProductViewModel = container.get<ProductViewModel>("ProductViewModel");

export default function View_Add_product() {
    const [products, setProducts] = useState<Entity.Product[]>([]);

    useEffect(() => {
         vm.getList()
            .then((item)=>{
                setProducts(item);
            })
            .catch(()=>{
                alert("error");
            });
      },[]);

    return (
        <BackGround>
            <Nav />
            <ProductCategory />
            <Search_Product
                productList={products}
                />
            <ProductList products={products}/>
        </BackGround>
    );
}

const BackGround = styled.div`
    background-color: #f7f7f7;
    padding-bottom: 100px;
`;