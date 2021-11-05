import React from "react";
import styled from "styled-components";

const NoResult : React.FC = () => {
    return(
        <NoResultContainer>
            No Results
        </NoResultContainer>
    )
}

const NoResultContainer = styled.div`{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1100px;
    height: 780px;
    font-family: NanumSquare_acB;
    font-size: 32px;
    color: #e0e0e3;
}`

export default NoResult;