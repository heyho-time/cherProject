import React, {useState} from 'react';
// import { useHistory } from "react-router";
import styled from 'styled-components';
import arrow from '../../../assets/images/arrow-up-inverse.png';
import container from "injector";
import {AddProductViewModel} from '../../../../view-model';

// const vm: AddProductViewModel = container.get<AddProductViewModel>("AddProductViewModel");

const AddProductView:React.FC=()=> {
    // const history = useHistory();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [isCheckedTax, setIsCheckedTax] = useState(false);
    const [Sku, setSku] = useState('');
    const [availNum, setAvailNum] = useState('');
    const [IsContinueSell, setIsContinueSell] = useState(false);
    const [productState, setProductState] = useState(false);

    // const [inputs, setInputs] = useState({
    //     id: '',
    //     image: [''],
    //     title : '',
    //     categoryIds: [],
    //     productDetail: {price:0, description:'' }
    // });

    const getTitle = (e : React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
      };

    const getDescription = (e : React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
      };

    const getPrice = (e : React.ChangeEvent<HTMLInputElement>) => {
        setPrice(e.target.value);
    };

    const getIsCheckedTax = (e : React.ChangeEvent<HTMLInputElement>) => {
      setIsCheckedTax(e.target.checked);
  };

    const getSku = (e : React.ChangeEvent<HTMLInputElement>) => {
      setSku(e.target.value);
    };

    const getAvailNum = (e : React.ChangeEvent<HTMLInputElement>) => {
      setAvailNum(e.target.value);
    };

    const getIsContinueSell = (e : React.ChangeEvent<HTMLInputElement>) => {
      setIsContinueSell(e.target.checked);
    };

    const getProductState = (e : React.ChangeEvent<HTMLInputElement>) => {
      setProductState(e.target.checked);
    };

    // const SubmitProduct = ()=> {
    //     vm.clickSave(inputs)
    //     .then(() => {
    //         history.push("/");
    //     })
    //     .catch(() => {
    //         return("error");
    //     });
    // };

    console.log(title, description, price, isCheckedTax, productState, Sku, availNum, IsContinueSell, productState);

    // const imgInputBtnClick = (e : any) => {
    //   e.preventDefault();
    //   uploadImg.current.click();
    // };

    return (
        <Container>
            <Head>
            <p>Add New Product</p>
            <div>
                <CancelBtn>Cancel</CancelBtn>
                <SaveBtn /*onClick={SubmitProduct}*/>Save</SaveBtn>
            </div>
        </Head>
            <ProductInfo>
                <div>
                    <Title>
                        <h3>Title</h3>
                        <InputTitle type="text" placeholder="very cool product" onBlur={getTitle} />
                        <h3>Description</h3>
                        <Description type="text" placeholder="Add product description here." onBlur={getDescription} />
                    </Title>
                    <ImageUpload>
                        <h3>Images</h3>
                        <AddFile>
                            <label htmlFor="file"><Circle><img src={arrow} /></Circle></label>
                            <input type="file" accept='image/*' id="file" name="Image" />
                            <AddImg htmlFor="file">Add File</AddImg>
                            <p>or drop files to upload</p>
                        </AddFile>
                    </ImageUpload>
                    <Pricing>
                        <h3>Pricing</h3>
                        <InputWrap>
                            <input type="number" placeholder="0" onBlur={getPrice} />
                            <div>₩</div>
                        </InputWrap>
                        <PricingCheckBox>
                            <input type="checkbox" onChange={getIsCheckedTax} />
                            <p>Charge tax on this item(VAT)</p>
                        </PricingCheckBox>
                     </Pricing>
                     <Inventory>
                        <h3>Inventory</h3>
                        <div>
                            <InvenInputWrap>
                                <p>SKU (Stock Keeping Unit)</p>
                                <input type="text" onBlur={getSku} />
                            </InvenInputWrap>
                            <InvenInputWrap>
                                <p>Available</p>
                                <input type="number" onBlur={getAvailNum} />
                            </InvenInputWrap>
                        </div>
                        <InvenCheckBox>
                            <input type="checkbox" onChange={getIsContinueSell} />
                            <p>Continue selling when out of stock</p>
                        </InvenCheckBox>
                    </Inventory>
                    <Variants>
                        <h3>Variants</h3>
                        <VariantsCheckBox>
                            <input type="checkbox" />
                            <p>This product has multiple options, like different sizes or colors</p>
                        </VariantsCheckBox>
                    </Variants>
                </div>
                <div>
                    <ProductState>
                        <h3>Product State</h3>
                        <StateCheckBox>
                            <input type="checkbox" onChange={getProductState} />
                            <p>Sold out</p>
                        </StateCheckBox>
                     </ProductState>
                     <Category>
                        <h3>Category</h3>
                        <input type="text" placeholder="Search for categories" />
                     </Category>
                </div>
            </ProductInfo>
        </Container>
    );
};

export default AddProductView;

const Container = styled.div`
    padding-bottom: 50px;
    width:100%;
    height:100%;
    background-color: #f7f7f7;

h3 {
    margin: 0 0 2px 0;
        font-family: NanumSquare_acB;
        font-size: 16px;
        color: #374554;
}
`;

const Head = styled.div`
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

const ProductInfo = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0 auto;
`;

const AddImg = styled.label`
  display: flex;
  justify-content: center;
  width: 84px;
  height: 36px;
  padding: 10px 0;
  border-radius: 4px;
  border: solid 1px #babfc3;
  font-family: NanumSquare_acB;
  font-size: 14px;
  color: rgb(55, 69, 84);
  cursor: pointer;
`;

const Category = styled.div`
      width: 340px;
      margin: 16px 0 0 16px;
      padding: 20px;
      border-radius: 4px;
      box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);
      background-color: #fff;

      input {
        width: 300px;
        height: 40px;
        margin: 16px 0 0;
        padding: 12px 0 12px 18px;
        border-radius: 4px;
        border: solid 1px #eaeaea;
        background-color: #fff;
      }
    `;

const ProductState = styled.div`
  width: 340px;
  margin: 39px 0 16px 16px;
  padding: 20px 21px 20px 20px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  border: 1px solid green;
`;

const StateCheckBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px 0 0;

  input {
    margin-right: 10px;
    width: 21px;
    height: 21px;
    object-fit: contain;
  };

  p {
    height: 18px;
    font-family: NanumSquare_acR;
    font-size: 16px;
    color: #58606e;
  }
`;

const Variants = styled.div`
  width: 796px;
  margin: 16px 16px 0 64px;
  padding: 20px 28px 20px 20px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);
  background-color: #fff;
`;

const VariantsCheckBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px 0 0;

  input {
    margin-right: 10px;
    width: 21px;
    height: 21px;
    object-fit: contain;
  };

  p {
    height: 18px;
    font-family: NanumSquare_acR;
    font-size: 16px;
    color: #58606e;
  }
`;

const Inventory = styled.div`
  width: 796px;
  margin: 16px 16px 16px 64px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);
  background-color: #fff;

  div {
      display: flex;
  }
`;

const InvenInputWrap = styled.div`
    display: flex;
    flex-direction: column;

    p {
        font-family: NanumSquare_acR;
        font-size: 14px;
        color: #58606e;
    }

    input {
        width: 368px;
        height: 50px;
        margin: 8px 8px 0 0;
        border-radius: 2px;
        border: solid 1px #eaeaea;
        font-size: 18px;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
`;

const InvenCheckBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px 0 0;

  input {
    margin-right: 10px;
    width: 21px;
    height: 21px;
    object-fit: contain;
  };

  p {
    width: 300px;
    height: 18px;
    font-family: NanumSquare_acR;
    font-size: 16px;
    color: #58606e;
  }
`;

const Pricing = styled.div`
  width: 796px;
  margin: 16px 16px 16px 64px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);
  background-color: #fff;
`;

const InputWrap = styled.div`
position: relative;

input {
    width: 756px;
    height: 50px;
    margin: 8px 0 0;
    padding: 16px;
    border-radius: 4px;
    border: solid 1px #eaeaea;
    color: #8a8a8a;
    font-family: NanumSquare_acR;
    font-size: 16px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

div {
    position: absolute;
    right: 13px;
    top: 25px;
    color: #8a8a8a;
    font-family: NanumSquare_acR;
    font-size: 16px;
}
`;

const PricingCheckBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px 0 0;

  input {
    margin-right: 10px;
    width: 21px;
    height: 21px;
    object-fit: contain;
  };

  p {
    width: 300px;
    height: 18px;
    font-family: NanumSquare_acR;
    font-size: 16px;
    color: #58606e;
  }
`;

const ImageUpload = styled.div`
width: 796px;
height: 366px;
margin: 16px 16px 16px 64px;
padding: 20px;
border-radius: 4px;
box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);
background-color: #fff;
`;

const AddFile = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 756px;
height: 300px;
margin: 8px 0 0;
padding: 71px 298px;
border-radius: 2px;
border: 2px dashed #eaeaea;

input{
  display:none;
}

p {
  margin: 20px 0 0;
  width: 160px;
  font-family: NanumSquare_acR;
  font-size: 16px;
  text-align: center;
  color: #8a8a8a;
}
`;

const Circle = styled.div`
width: 64px;
height: 64px;
margin-bottom: 20px;
padding: 22px;
border-radius: 80px;
background-color: #7770ff;
cursor: pointer;
`;

const Title = styled.div`
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
