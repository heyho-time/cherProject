import React from "react";
import styled from "styled-components";
import img from "../../../../assets/images/product.png";

const ImageList : React.FC= () => {
    return (
        <ImageListContainer>
            <MainImage src={img} />
            <SubImage1 src={img} />
            <SubImage2 src={img} />
            <SubImage3 src={img} />
            <SubImage4 src={img} />
            <SubImage5 src={img} />
            <SubImage6 src={img} />
        </ImageListContainer>
    )
}

const ImageListContainer = styled.div`
    border: 1px solid red;
    display: grid;
    grid-template-columns: 300px 200px 200px 200px;
    grid-template-rows: 150px 150px;
`

const MainImage = styled.img`
    width: 280px;
    height: 280px;
    object-fit: cover;
`

const SubImage1 = styled.img`
    width: 140px;
    height: 140px;
    object-fit: cover;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
`

const SubImage2 = styled.img`
    width: 140px;
    height: 140px;
    object-fit: cover;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
`

const SubImage3 = styled.img`
    width: 140px;
    height: 140px;
    object-fit: cover;
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
`

const SubImage4 = styled.img`
    width: 140px;
    height: 140px;
    object-fit: cover;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
`

const SubImage5 = styled.img`
    width: 140px;
    height: 140px;
    object-fit: cover;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
`

const SubImage6 = styled.img`
    width: 140px;
    height: 140px;
    object-fit: cover;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
`


export default ImageList;