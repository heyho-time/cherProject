import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 92px;
    padding: 28px 64px;
    background-color: white;

    p {
        font-family: NanumSquare_acEB;
        font-size: 20px;
    }

    div {
        display: flex;
    }
`;

const CancelBtn = styled.button`
    width: 80px;
    height: 36px;
    margin: 0 8px 0 0;
    padding: 10px 18px;
    border-radius: 4px;
    border: solid 1px #babfc3;
    font-family: NanumSquare_acB;
    font-size: 14px;
    color: #374554;
`;

const SaveBtn = styled.button`
    width: 80px;
    height: 36px;
    border-radius: 4px;
    font-family: NanumSquare_acB;
    font-size: 14px;
    background-color: #e0e0e3;
    color: white;
`;

const Head=()=> {
    return (
        <Container>
            <p>Add New Product</p>
            <div>
                <CancelBtn>Cancel</CancelBtn>
                <SaveBtn>Save</SaveBtn>
            </div>
        </Container>
    );
};

export default Head;