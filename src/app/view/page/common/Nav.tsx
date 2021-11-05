import React from 'react';
import styled from 'styled-components';

export default function Nav() {
    return (
        <Container>
            <ButtonWrap>
                <Button>
                    <img alt="shoppingCartImg" src="src/app/view/assets/images/shopping-cart-idle@3x.png" />
                    <p>Checkout</p>
                </Button>
                <Button>
                    <img alt="salesImg"src="src/app/view/assets/images/sales-idle.png" />
                    <p>Sales</p>
                </Button>
                <Button>
                    <img alt="productImg" src="src/app/view/assets/images/store-idle.png" />
                    <p>Product</p>
                </Button>
            </ButtonWrap>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 0;
  width: 100%;
  height: 92px;
  box-shadow: 0 1px 0 0 var(--greyblue-15);
  background-color: #fff;

  img {
  width: 20px;
  height: 20px;
  margin-bottom: 8px;
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
