import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import * as Entity from "domain/entity";
import container from "injector";
import { AddCategoryViewModel } from '../../../../view-model';

import ProductItem from "./ProductItem";
import EditProductsModal from "./EditProductsModal";

const vm: AddCategoryViewModel = container.get<AddCategoryViewModel>("AddCategoryViewModel");

interface AddCategoryViewInterface {
    getToastStatus: (status: boolean) => void;
}

const AddCategoryView : React.FC<AddCategoryViewInterface> = (props) => {
    const history = useHistory();
    const [ categoryTitle, setCategoryTitle ] = useState<string>("");
    const [ productList, setProductList ] = useState<Entity.Product[]>([]);
    const [ modalState, setModalState ] = useState<boolean>(false);
    const [ selectedItems, setSelectedItems ] = useState<number[]>([]);

    const getCategoryTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategoryTitle(e.target.value);
    }

    const showProductListModal = () => {
        setModalState(!modalState);
    }

    const getModalState = (isVisible : boolean) => {
        setModalState(isVisible);
    }

    const getSelectedItems = (selectedItems : string[]) => {
        const stringToNum = selectedItems.map(item => parseInt(item, 10));
        setSelectedItems(stringToNum);
    }

    const handleBtnSave = () => {
        const newCategory = {
            "category": {
                "name": categoryTitle,
            }, 
            "product": selectedItems
        }

        vm.addProductsByCategory(newCategory)
        .then(res => {
            alert("새 카테고리가 추가되었습니다.");
            props.getToastStatus(true);
            history.push('/category_list');
        })
        .catch(err => alert("카테고리 추가 실패"));
    }
    
    useEffect(() => {
        vm.getProductList()
        .then(res => setProductList(res))
        .catch(err => console.log(err));
    }, []);

    const selectedProducts = productList.filter(item => selectedItems.includes(item.id));

    return (
        <AddCategoryViewContainer>
            <ModalBackground isVisible={modalState}></ModalBackground>
            <Header>
                    <span>Add New Category</span>
                    <div>
                        <Link to="/category_list"><BtnCancel>Cancel</BtnCancel></Link>
                        <BtnSave onClick={handleBtnSave}>Save</BtnSave>
                    </div>
            </Header>
            <Contents>
                <TitleBox>
                    <p>Title</p>
                    <SetCategoryTitle placeholder="Product Type or Group" value={categoryTitle} onChange={getCategoryTitle} />
                </TitleBox>
                <ProductsBox>
                    <p>Products</p>
                    <SetProducts placeholder="Search for products" onClick={showProductListModal} readOnly={true} />
                    <SelectedProductList>
                        {selectedProducts.map(item => {
                            return <ProductItem key={item.id} id={item.id} image={item.image} title={item.name} />
                        })}
                    </SelectedProductList>
                </ProductsBox>
            </Contents>
            <EditProductsModal 
                productList={productList} 
                modalState={modalState} 
                getModalState={getModalState} 
                getSelectedItems={getSelectedItems} 
            />
        </AddCategoryViewContainer>
    )
}

const AddCategoryViewContainer = styled.div`
    position: relative;
    height: 100vh;
    background-color: #f7f7f7;
`

const ModalBackground = styled.div<{isVisible: boolean}>`
    display: ${({isVisible}) => isVisible ? "block" : "none"};
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 22px;
    background-color: #ffffff;

    span {
        font-family: NanumSquare_acEB;
        font-size: 20px;
        color: #374554;
    }

    div {
        display: flex;
    }
`
const BtnCancel = styled.button`
    margin-right: 10px;
    padding: 10px 18px;
    border-radius: 4px;
    border: solid 1px #babfc3;
    color: #374554;
    cursor: pointer;
`
const BtnSave = styled.button`
    padding: 10px 24px;
    border-radius: 4px;
    background-color: #e0e0e3;
    color: #ffffff;
    cursor: pointer;
`

const Contents = styled.div`
    padding: 20px;

    p {
        margin-bottom: 10px;
    }
`

const TitleBox = styled.div`
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);
    background-color: #fff;
`

const SetCategoryTitle = styled.input`
    width: 100%;
    padding: 16px;
    border-radius: 2px;
    border: solid 1px #eaeaea;
`

const ProductsBox = styled.div`
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);
    background-color: #fff;
`

const SetProducts = styled.input`
    width: 100%;
    padding: 16px;
    border-radius: 2px;
    border: solid 1px #eaeaea;
`

const SelectedProductList = styled.div`
    margin-top: 10px;
`

export default AddCategoryView;