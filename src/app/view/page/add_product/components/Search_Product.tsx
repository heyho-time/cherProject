import React,{useEffect} from 'react';
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
  top:152px;
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
`;

interface SearchProductProps {
    productList : Entity.Product[];
}

const Search_Product:React.FC<SearchProductProps>=(props) =>{
    const [keyword,setKeyword] = React.useState<string>("");

    const searched = props.productList.filter((product)=> product.title.includes(keyword));

    console.log("keyword", keyword);
    console.log(searched);

    useEffect(()=>{
        window.addEventListener("click", ()=>{setKeyword("")});
    },[]);

    return (
        <Container>
            <Wrap>
                <input value={keyword} onChange={(e)=> {setKeyword(e.target.value);}}/>
                {keyword ? (
                  <SearchedBox>
                    {searched.map((item) => {return <SearchedItem key={item.id}>{item.title}</SearchedItem>;})}
                  </SearchedBox>) : (null)}
                <Link to="/add_new_product"><button>Add Product</button></Link>
            </Wrap>
        </Container>
    );
};

export default Search_Product;