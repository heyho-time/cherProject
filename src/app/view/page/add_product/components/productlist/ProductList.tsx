import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import Items from './Items';
import container from "injector";
import {UserViewModel} from '../../../../../view-model/';

const BackGround = styled.div`
    margin: 0 64px;
    border-radius: 5px;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.1);
`;

const TableHead = styled.div`
    display: flex;
    /* justify-content: space-evenly; */
    padding: 22px 0 22px 90px;
    margin-top: 3px;
    background-color: white;
    color: #58606e;
`;

const Column = styled.div`
    display: flex;
    align-items: center;
    width: 600px;
`;

const ProductList :React.FC=()=> {
    const [productList, setProductList] = useState([]);

    const vm: UserViewModel = container.get<UserViewModel>("UserViewModel");
    // const test = () => {
    //     vm.clickUser()
    //         .then((product:any)=>{
    //             setProductList(product);
    //         })
    //         .catch(()=>{
    //             alert("error");
    //         });
    // };
    useEffect(() => {
         vm.list()
            .then((product:any)=>{
                setProductList(product);
            })
            .catch(()=>{
                alert("error");
            });
      }, []);

    return (
        <BackGround>
                <TableHead>
                    <Column>Product Name</Column>
                    <Column>Quantity</Column>
                    <Column>Category</Column>
                </TableHead>
                {productList.map(({title, image, productDetail}, idx) => {
                    return(
                        <Items key={idx} title={title} image={image} productDetail={productDetail} />
                    );
                })}
        </BackGround>
    );
};
export default ProductList;