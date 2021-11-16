import React from 'react';
import styled from 'styled-components';

// interface ProducteTitleProps {
//   value : string;
// }

const ProducteTitle :React.FC=()=>  {

    return (
        <Container>
            <h3>Title</h3>
            <InputTitle type="text" placeholder="very cool product" onChange={()=>{}} />
            <h3>Description</h3>
            <Description type="text" placeholder="Add product description here." />
        </Container>
    );
};

export default ProducteTitle;

const Container = styled.div`
    width: 796px;
    height: 470px;
    margin: 39px 16px 16px 64px;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);
    background-color: white;
`;

const InputTitle = styled.input`
  width: 756px;
  height: 50px;
  margin: 8px 0 8px;
  padding: 16px 611px 16px 16px;
  border-radius: 2px;
  border: solid 1px #eaeaea;
  font-family: NanumSquare_acR;
  font-size: 16px;
  color: #8a8a8a;
`;

const Description = styled.input`
  width: 756px;
  height: 300px;
  margin: 8px 0 0;
  padding: 16px 523px 266px 16px;
  border-radius: 2px;
  border: solid 1px #eaeaea;
  font-family: NanumSquare_acR;
  font-size: 16px;
  color: #8a8a8a;
`;
