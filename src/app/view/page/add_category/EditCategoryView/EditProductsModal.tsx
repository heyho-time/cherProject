import React, { useState, useEffect } from "react";
import styled from "styled-components";

import * as Entity from "domain/entity";
import ProductItem from "./ProductItem";

interface EditProductsModalInterface {
    productList: Entity.Product[];
    selectedItemIds: string[];
    modalState: boolean;
    getModalState: (isVisible : boolean) => void;
    getSelectedItems: (selectedItems: string[]) => void;
}

const EditProductsModal : React.FC<EditProductsModalInterface> = (props) => {
    const [ userInput, setUserInput ] = useState<string>("");
    const [ selectedItems, setSelectedItems ] = useState<string[]>([]);

    const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value);
    }

    const getIsItemChecked = (isChecked: boolean, id: string) => {
        if(isChecked === true) {
            setSelectedItems([...selectedItems, id])
        } else {
            const deletedFalseItem = selectedItems.filter(item => item !== id);
            setSelectedItems(deletedFalseItem);
        }
    }

    const clickBtnDone = () => {
        props.getModalState(false);
        props.getSelectedItems(selectedItems);
    }
    
    useEffect(() => {
        setSelectedItems(props.selectedItemIds);
        if(props.modalState === false) setUserInput("");
    }, [props.selectedItemIds])

    useEffect(() => {
        setUserInput("");
    }, [])
    
    const filteredList = props.productList.filter(item => item.name.includes(userInput));
    
    return (
        <EditProductsModalContainer isVisible={props.modalState}>
            <Header>Edit Products</Header>
            <Content>
                <SearchProductInput placeholder="Search for products" value={userInput} onChange={handleUserInput} />
                <ProductList>
                    {filteredList.map(item => {
                        return <ProductItem 
                                    key={item.id} 
                                    id={item.id} 
                                    image={item.image} 
                                    name={item.name} 
                                    parent="modal"
                                    isChecked={props.selectedItemIds.includes(item.id.toString()) ? true : false}
                                    getIsItemChecked={getIsItemChecked}
                                />
                    })}
                </ProductList>
            </Content>
            <Footer>
                <BtnCancel onClick={() => props.getModalState(false)}>Cancel</BtnCancel>
                <BtnDone onClick={clickBtnDone}>Done</BtnDone>
            </Footer>
        </EditProductsModalContainer>
    )
}

const EditProductsModalContainer = styled.div<{isVisible: boolean}>`
    position: absolute;
    top : 25%;
    left: 40%;
    display: ${({isVisible}) => isVisible ? "block" : "none"};
    width: fit-content;
    border-radius: 4px;
    background-color: #ffffff;
`

const Header = styled.div`
    padding: 20px;
    font-family: NanumSquare_acB;
    color: #374554;
`

const Content = styled.div` 
    padding: 20px;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
`

const SearchProductInput = styled.input`
    width: 360px;
    margin-bottom: 20px;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #eaeaea;

    :not(:placeholder-shown) {
        border: 1px solid #7770ff;
    }
`

const ProductList = styled.div`
    height: 260px;
    overflow-x: scroll;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`

const Footer = styled.div`
    padding: 20px;
    text-align: right;
`

const BtnCancel = styled.button`
    padding: 10px 18px;
    border-radius: 4px;
    border: solid 1px #babfc3;
    cursor: pointer;
`

const BtnDone = styled.button`
    margin-left: 10px;
    padding: 10px 22px 10px 23px;
    border-radius: 4px;
    background-color: #e0e0e3;
    cursor: pointer;
`

export default EditProductsModal;