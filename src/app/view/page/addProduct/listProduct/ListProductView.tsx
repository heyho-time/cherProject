import React, { useState, useEffect } from "react";
import * as Entity from "domain/entity";
// import { useHistory } from 'react-router';
import { Link } from "react-router-dom";
import styled from "styled-components";
// import Nav from '../../common/Nav';
import ProductCategory from "../../common/ProductCategory";
import ProductList from "./components/productlist/ProductList";
import container from "injector";
import { ListProductViewModel } from "../../../../view-model";

const vm: ListProductViewModel = container.get<ListProductViewModel>(
  "ListProductViewModel"
);

interface SearchProductProps {
  products: Entity.Product[];
  changeKeyword(e: React.ChangeEvent<HTMLInputElement>): void;
  keyword: string;
}

const ViewListProduct: React.FC<SearchProductProps> = () => {
  const [products, setProducts] = useState<Entity.Product[]>([]);
  const [keyword, setKeyword] = useState<string>("");
  const [isSearchedBoxOpen, setIsSearchedBoxOpen] = useState<boolean>(false);
  useEffect(() => {
    vm.getProductList()
      .then((item) => {
        setProducts(item);
      })
      .catch(() => {
        alert("error");
      });
  }, []);

  console.log(keyword);
  return (
    <BackGround>
      <ProductCategory />
      <Container>
        <Wrap>
          <input
            value={keyword}
            /*onBlur={() => {setKeyword("");}}*/ onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
          {keyword ? (
            <SearchedBox>
              {products
                .filter((product) => product.title.includes(keyword))
                .map((item) => {
                  return (
                    <SearchedItem
                      onClick={() => {
                        setKeyword(item.title);
                      }}
                      key={item.id}
                    >
                      {item.title}
                    </SearchedItem>
                  );
                })}
            </SearchedBox>
          ) : null}
          <Link to="/addproduct">
            <button>Add Product</button>
          </Link>
        </Wrap>
      </Container>
      <ProductList products={products} keyword={keyword} />
    </BackGround>
  );
};

export default ViewListProduct;

const BackGround = styled.div`
  background-color: #f7f7f7;
  padding-bottom: 100px;
`;

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
    cursor: pointer;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SearchedBox = styled.div`
  position: absolute;
  left: 0;
  top: 152px;
  width: 300px;
  max-height: 175px;
  margin: 64px 916px 411px 64px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 2px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  overflow: auto;
`;

const SearchedItem = styled.div`
  width: 270px;
  height: 50px;
  margin-left: 10px;
  padding: 16px 212px 16px 6px;
  font-family: NanumSquare_acR;
  font-size: 16px;
  color: #374554;
  background-color: white;
  cursor: pointer;
`;
