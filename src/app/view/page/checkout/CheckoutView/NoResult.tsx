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
    width: 1000px;
    height: 100%;
    align-items: center;
    font-family: NanumSquare_acB;
    font-size: 32px;
    color: #e0e0e3;
}`

export default NoResult;