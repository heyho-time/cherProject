import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductCategory :React.FC= () => {
    return (
        <Wrap>
            <StyledLink to="/add_product"><div>Product</div></StyledLink>
            <StyledLink to="/category_list"><div>Category</div></StyledLink>
        </Wrap>
    );
};

export default ProductCategory;

const Wrap = styled.div`
    display: flex;
    width: 100%;
    margin: 1px 0 0;
    padding: 31px 1056px 0 64px;
    background-color: #fff;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    

    div {
        width: 80px;
        padding: 0 6px 8px 0;
        font-family: NanumSquare_acR;
        font-size: 14px;
        text-align: center;
        color: #333840;
        border-bottom: 2px solid #f7f7f7;
        cursor: pointer;

        &:hover {
            color: #7770ff;
            border-bottom : 2px solid #7770ff;
        };
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`