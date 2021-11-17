import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import salesIdle from "../../assets/images/sales-idle.png";
import shoppingCartIdle from '../../assets/images/shopping-cart-idle.png';
import storeIdle from '../../assets/images/store-idle.png';

const Nav: React.FC = ()=> {
    return (
        <Container>
            <ButtonWrap>
                <StyledLink to="/checkout">
                    <Button>
                        <img src={shoppingCartIdle} />
                        <p>Checkout</p>
                    </Button>
                </StyledLink>
                <StyledLink to="/">
                    <Button>
                        <img src={salesIdle} />
                        <p>Sales</p>
                    </Button>
                </StyledLink>
                <StyledLink to="/add_product">
                    <Button>
                        <img src={storeIdle} />
                        <p>Product</p>
                    </Button>
                </StyledLink>
            </ButtonWrap>
        </Container>
    );
};

export default Nav;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 0;
  width: 100%;
  box-shadow: 0 1px 0 0 var(--greyblue-15);
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 2;

  img {
  width: 20px;
  height: 20px;
  margin-bottom: 8px;
  object-fit: contain;
  }

  p {
  font-family: NanumSquare_acEB;
  font-size: 12px;
  color: #959595;
  }
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  margin-left: 8px;
  border-radius: 2px;

  &:hover {
    width: 64px;
    height: 64px;
    border-radius: 2px;
    background-color: #f1f0ff;
  }
`;

const ButtonWrap = styled.div`
    display: flex;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`