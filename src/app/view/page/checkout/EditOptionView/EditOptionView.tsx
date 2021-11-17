import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import styled from "styled-components";

import * as Entity from "domain/entity";
import container from "injector";
import { EditOptionViewModel } from "app/view-model";

import plusIcon from "../../../assets/images/minor-plus.png";
import minusIcon from "../../../assets/images/minor-minus.png";

interface EditOptionViewLocation {
    id: string;
    productId: string;
    image: string[];
    title: string;
    options: Entity.Option[];
    stock: number;
    quantity: number;
    price: number;
}

const vm: EditOptionViewModel = container.get<EditOptionViewModel>("EditOptionViewModel");

const EditOptionView : React.FC = () => {
    const history = useHistory();
    const locationProps = useLocation<EditOptionViewLocation>().state;
    const [ quantity, setQuantity ] = useState<number>(locationProps.quantity);
    const [ discountType, setDiscountType ] = useState<string>("override");
    const [ discountRate, setDiscountRate ] = useState<number>(0);
    const [ price, setPrice ] = useState<number>(0);
    
    const getDiscountType = (e : React.ChangeEvent<HTMLSelectElement>) => {
       setDiscountType(e.target.value);
    }

    const getDiscountRate = (e : React.ChangeEvent<HTMLInputElement>) => {
        setDiscountRate(Number(e.target.value));
    }

    const clickBtnSave = () => {
        const options = {
            id: locationProps.id,
            quantity: quantity,
            discount: {type: discountType, rate: discountRate},
        }

        vm.clickSaveOptions(options)
        .then(res => {
            alert("변경사항이 저장되었습니다.");
            history.push("/checkout");
        })
        .catch(error => alert("저장에 실패하였습니다."));
    }

    useEffect(() => {
        const totalPrice = locationProps.price * quantity;

        if(discountRate === 0) {
            setPrice(totalPrice);
        } else {
            if(discountType === "override") {
                setPrice(discountRate * quantity)
            } else {
                setPrice(totalPrice* discountRate * 0.01);
            }
        }
    }, [discountType, discountRate, quantity])

    return(
        <EditOptionViewContainer>
            <EditOptionBox>
                <Header>
                    <BtnCancel onClick={() => history.push("/checkout")}>Cancel</BtnCancel>
                    <Title>Edit Product</Title>
                    <BtnSave onClick={clickBtnSave}>Save</BtnSave>
                </Header>
                <Info>
                    <ProductImage src={locationProps.image[0]} />
                    <Row>
                        <Name>{locationProps.title}</Name>
                        <Option>
                            {locationProps.options.map((option, index) => {
                            return <span key={option.id}>{`${option.tag[0].name}${index !== (locationProps.options.length - 1) ? " / " : ""}`}</span>
                        })}
                        </Option>
                    </Row>
                    <StockCount>{locationProps.stock} in stock</StockCount>
                </Info>
                <Quantity>
                    <OptionTitle>Quantity</OptionTitle>
                    <SetQuantity>
                        <BtnCount act="minus" onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}><img src={minusIcon} /></BtnCount>
                        <QuantityCount value={quantity} readOnly={true}></QuantityCount>
                        <BtnCount act="plus" onClick={() => setQuantity(quantity + 1)} ><img src={plusIcon} /></BtnCount>
                    </SetQuantity>
                </Quantity>
                <Pricing>
                    <OptionTitle>Pricing</OptionTitle>
                    <ItemPrice>
                        <OptionTitle>Item Price</OptionTitle>
                        <Price>{price.toLocaleString("en")}￦</Price>
                    </ItemPrice>
                </Pricing>
                <Discount>
                    <OptionTitle>Item Price Discount</OptionTitle>
                    <SetDiscount>
                        <DiscountInput value={discountRate} onChange={getDiscountRate} />
                        <DiscountType name="discountType" defaultValue="default" onChange={getDiscountType}>
                            <option value="override">Override</option>
                            <option value="percentage">Percentage (%)</option>
                        </DiscountType>
                    </SetDiscount>
                </Discount>
                <BtnRemove onClick={() => vm.clickRemoveCheckout(locationProps.id)}>Remove from Checkout</BtnRemove>
            </EditOptionBox>
        </EditOptionViewContainer>
    )
}

const EditOptionViewContainer = styled.div`{
    display: flex;
    justify-content: center;
    height: 100vh;
    background-color: #f7f7f7;
}`

const EditOptionBox = styled.div`{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    height: 91%;
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
    cursor: pointer;
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
    cursor: pointer;
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
    object-fit: cover;
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

const BtnCount = styled.button<{act : string}>`{
    padding: 10px 73px;
    border-radius: 2px;
    background-color: ${({act}) => act === "minus" ? "#e0e0e3" : "#7770ff"};
    flex: 1;
    cursor: pointer;
}`

const QuantityCount = styled.input`{
    border-radius: 2px;
    background-color: #f5f7fa;
    padding: 12px 77px;
    font-family: NanumSquare_acB;
    flex: 1;
    margin: 0 20px;
    display: flex;
    justify-content: center;
    text-align: center;
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
    margin-bottom: 10px;
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

export default EditOptionView;