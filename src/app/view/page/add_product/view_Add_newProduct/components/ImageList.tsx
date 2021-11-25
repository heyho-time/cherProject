import React from "react";
import styled from "styled-components";
import img from "../../../../assets/images/product.png";

const ImageList : React.FC= () => {
    return (
        <ImageListContainer>
            <SubImage1 src={img} />
            <SubImage2 src={img} />
            <SubImage3 src={img} />
            <SubImage4 src={img} />
            <SubImage5 src={img} />
            <SubImage6 src={img} />
            <SubImage7 src={img} />
        </ImageListContainer>
    )
}

const ImageListContainer = styled.div`
    border: 1px solid red;
    background-color: red;
    display: grid;
`

const SubImage1 = styled.img`
`

const SubImage2 = styled.img`
`

const SubImage3 = styled.img`
`

const SubImage4 = styled.img`
`

const SubImage5 = styled.img`
`

const SubImage6 = styled.img`
`

const SubImage7 = styled.img`
`


export default ImageList;