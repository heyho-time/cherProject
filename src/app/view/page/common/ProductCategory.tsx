import React from 'react';
import styled from 'styled-components';
import container from "injector";
import {UserViewModel} from '../../../view-model';

const Wrap = styled.div`
  display: flex;
  width: 100%;
  margin: 1px 0 0;
  padding: 31px 1056px 0 64px;
  background-color: #fff;

  div {
  width: 80px;
  padding: 0 6px 8px 0;
  font-family: NanumSquare_acR;
  font-size: 14px;
  text-align: center;
  color: #333840;
  border-bottom: 2px solid #f7f7f7;

  &:hover {
      color: #7770ff;
      border-bottom : 2px solid #7770ff;
  };
  };
`;

const ProductCategory :React.FC= () => {

    const vm: UserViewModel = container.get<UserViewModel>("UserViewModel");

    const test = () => {
        vm.list()
            .then((product)=>{
                console.log(product);
            })
            .catch(()=>{
                alert("error");
            });
    };

    return (
        <Wrap>
            <div onClick={test}>Product</div>
            <div>Category</div>
        </Wrap>
    );
};

export default ProductCategory;
