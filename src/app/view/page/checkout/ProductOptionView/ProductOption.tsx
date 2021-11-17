import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import * as Entity from "domain/entity";
import OptionTag from "./OptionTag";

import minusIcon from "../../../assets/images/minus-idle.png";
import plusIcon from "../../../assets/images/add-idle.png";

import container from "injector";
import { ProductOptionViewModel } from "app/view-model";

const vm: ProductOptionViewModel = container.get<ProductOptionViewModel>("ProductOptionViewModel");

interface ProductOptionInterface {
    itemInfo: Entity.Product;
}

const ProductOption : React.FC<ProductOptionInterface> = (props) => {
    const history = useHistory();
    const [ quantity, setQuantity ] = useState<number>(1);
    const [tags, setTags] = useState<object[]>([]);
    
    const getSelectedTags = (e : React.ChangeEvent<HTMLInputElement>) => {
        setTags([...tags, {id: e.target.name, tag: e.target.value}]);
    }

    const handleBtnAddClick = () => {
        const options = {
            id: props.itemInfo.id,
            quantity: quantity,
            option: tags
        };

        vm.clickAddToCheckout(options)
        .then(res => alert("장바구니에 상품이 담겼습니다."))
        .catch(err => alert("에러가 발생하였습니다."))

        history.push("/checkout");
    }

    return (
        <ProductOptionContainer>
            <Content>
                <Name>{props.itemInfo.title}</Name>
                <Price>{props.itemInfo.productDetail.price.toLocaleString('en')}￦</Price>
                <SelectOption>
                    <Row order="first">
                        {props.itemInfo.productDetail.option.map(option => {
                            return (
                                <Column key={option.id}>
                                    <OptionTitle>{option.name}</OptionTitle>
                                    <OptionTagList>
                                        {option.tag.map(tag => {
                                            return (
                                                <OptionTag 
                                                    key={tag.id} 
                                                    id={tag.id} 
                                                    groupId={option.id}
                                                    groupName={option.name} 
                                                    name={tag.name} 
                                                    getSelectedTags={getSelectedTags}
                                                />
                                            )
                                        })}
                                    </OptionTagList>
                                </Column>
                            )
                        })}
                    </Row>
                    <Row order="second">
                        <SetCount>
                            <BtnCount src={minusIcon} onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)} />
                            <Count value={quantity} readOnly={true}/>
                            <BtnCount src={plusIcon} onClick={() => setQuantity(quantity + 1)} />
                        </SetCount>
                    </Row>
                </SelectOption>
                <ProductInfo>
                    <OptionTitle>Image</OptionTitle>
                    <ImageList>
                        {props.itemInfo.image.map((image, index) => {
                            return <img key={index} src={image}/>
                        })}
                    </ImageList>
                    <OptionTitle>Product Description</OptionTitle>
                    <Description>
                        {props.itemInfo.productDetail.description}
                    </Description>
                </ProductInfo>
            </Content>
            <Footer>
                <BtnAdd onClick={handleBtnAddClick}>Add to Checkout</BtnAdd>
            </Footer>
        </ProductOptionContainer>
    )
}

const ProductOptionContainer = styled.div`{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 1000px;
    height: 79vh;
    padding: 20px;
    border-radius: 4px;
    background-color: #ffffff;
}`

const Content = styled.div`{
    flex: 1;
}`

const Name = styled.h1`{
    font-family: NanumSquare_acEB;
    font-size: 26px;
    color: #374554;
}`

const Price = styled.h4`{
    margin: 10px 0;
    font-size: 18px;
    font-weight: lighter;
}`

const SelectOption = styled.div`{
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    max-height: 350px;
    margin-bottom: 5px;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    overflow-x: scroll;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
}`

const Row = styled.div<{order : string}>`{
    flex: ${({order}) => order === "first" ? 1 : 0}
}`

const Column = styled.div`{
    display: flex;
    flex-direction: column;
}`

const ProductInfo = styled.div`{
    display: flex;
    flex-direction: column;
}`

const OptionTitle = styled.p`{
    margin: 10px 0;
    font-size: 18px;
}`

const OptionTagList = styled.div`{
    margin-bottom: 10px;
    display: flex;

    label {
        margin-right: 10px;
        padding: 12px 30px;
        border-radius: 4px;
        font-family: NanumSquare_acR;
        font-size: 17px;
        cursor: pointer;
        transition: all 0.1s ease-in;
    }
}`

const SetCount = styled.div`{
    display: flex;
    margin-top: 20px;
    border-radius: 4px;
    border: solid 2px #eaeaea;
}`

const BtnCount = styled.img`{
    width: 20px;
    margin: 10px;
    cursor: pointer
}`

const Count = styled.input`{
    width: 50px;
    text-align: center;
    font-size: 15px;
    color: #626262;
}`

const ImageList = styled.ul`{
    margin-bottom: 10px;

    img {
        width: 80px;
        height: 80px;
        margin-right: 10px;
        object-fit: cover;
    }
}`

const Description = styled.p`{
    line-height: 1.5;
    font-family: NanumSquare_acR;
    color: #626262;
}`

const Footer = styled.footer`{
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: solid 1px #eaeaea;
}`

const BtnAdd = styled.button`{
    margin-top: 20px;
    padding: 15px 118px 15px 117px;
    border-radius: 4px;
    background-color: #7770ff;
    font-size: 17px;
    color: #ffffff;
    cursor: pointer;
}`


export default ProductOption;