import React from "react";
import styled from "styled-components";
import productImage from "../../../assets/images/product.png";
import plusIcon from "../../../assets/images/minor-plus.png";
import minusIcon from "../../../assets/images/minor-minus.png";

const EditProduct : React.FC = () => {
    return (
        <EditProductContainer>
            <Header>
                <BtnCancel>Cancel</BtnCancel>
                <Title>Edit Product</Title>
                <BtnSave>Save</BtnSave>
            </Header>
            <Info>
                <ProductImage src={productImage} />
                <Row>
                    <Name>Product Name</Name>
                    <Option>Blue / Free</Option>
                </Row>
                <StockCount>15 in stock</StockCount>
            </Info>
            <Quantity>
                <OptionTitle>Quantity</OptionTitle>
                <SetQuantity>
                    <BtnMinus><img src={minusIcon}/></BtnMinus>
                    <QuantityCount>1</QuantityCount>
                    <BtnPlus><img src={plusIcon}/></BtnPlus>
                </SetQuantity>
            </Quantity>
            <Pricing>
                <OptionTitle>Pricing</OptionTitle>
                <ItemPrice>
                    <OptionTitle>Item Price</OptionTitle>
                    <Price>22,000￦</Price>
                </ItemPrice>
            </Pricing>
            <Discount>
                <OptionTitle>Item Price Discount</OptionTitle>
                <SetDiscount>
                    <DiscountInput value={0} />
                    <DiscountType defaultValue="default">
                        <option>Override</option>
                        <option>Percentage (%)</option>
                    </DiscountType>
                </SetDiscount>
            </Discount>
            <BtnRemove>Remove from Checkout</BtnRemove>
        </EditProductContainer>
    )
}

const EditProductContainer = styled.div`{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 777px;
    padding: 20px;
    background-color: #ffffff;
}`

const Header = styled.div`{
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
}`

const BtnCancel = styled.button`{
    font-family: NanumSquare_acR;
    font-size: 16px;
    color: #374554;
}`

const Title = styled.span`{
    font-family: NanumSquare_acB;
    font-size: 18px;
    color: #374554;
}`

const BtnSave = styled.button`{
    font-family: NanumSquare_acR;
    font-size: 16px;
    color: #374554;
}`

const Info = styled.div`{
    padding: 10px 0;
    display: flex;
    border-top: 2px solid #eaeaea;
    border-bottom: 2px solid #eaeaea;
}`

const ProductImage = styled.img`{
    width: 70px;
    height: 70px;
}`

const Row = styled.div`{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 10px;
}`

const Name = styled.span`{
    font-family: NanumSquare_acB;
    font-size: 22px;
}`

const Option = styled.span`{
    font-family: NanumSquare_acR;
    font-size: 17px;
    color: #959595;
}`

const StockCount = styled.div`{
    font-family: NanumSquare_acR;
    font-size: 15px;
    color: #959595;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
}`

const Quantity = styled.div`{

}`

const OptionTitle = styled.div`{
    font-size: 17px;
    padding: 15px 0;
}`

const SetQuantity = styled.div`{
    display: flex;
    justify-content: space-between;
}`

const BtnMinus = styled.button`{
    padding: 10px 73px;
    border-radius: 2px;
    background-color: #e0e0e3;
    flex: 1;
}`

const QuantityCount = styled.div`{
    border-radius: 2px;
    background-color: #f5f7fa;
    padding: 12px 77px;
    font-family: NanumSquare_acB;
    flex: 1;
    margin: 0 20px;
    display: flex;
    justify-content: center;
}`

const BtnPlus = styled.button`{
    padding: 10px 73px;
    border-radius: 2px;
    background-color: #7770ff;
    flex: 1;
}`

const Pricing = styled.div`{
}`

const ItemPrice = styled.div`{
    display: flex;
    align-items: center;
    justify-content: space-between;
}`

const Price = styled.span`{
    font-weight: bold;
}`

const Discount = styled.div`{
    border-top: 2px solid #eaeaea;
}`

const SetDiscount = styled.div`{
    display: flex;
}`

const DiscountInput = styled.input`{
    display: block;
    padding: 16px;
    border-radius: 2px;
    border: solid 2px #eaeaea;
    font-family: NanumSquare_acR;
    font-size: 16px;
    color: #374554;
    flex: 1;
}`

const DiscountType = styled.select`{
    padding: 17px 16px 16px 16px;
    border-radius: 4px;
    background-color: #fff;
    border-radius: 2px;
    border: solid 2px #eaeaea;
    margin-left: 6px;
    font-family: NanumSquare_acB;
    font-size: 16px;
    color: #374554;
}`

const BtnRemove = styled.button`{
    border-radius: 4px;
    border: solid 1px #eaeaea;
    font-family: NanumSquare_acB;
    font-size: 16px;
    text-align: center;
    color: #c85959;
    padding: 15px;
    cursor: pointer;
}`

export default EditProduct;