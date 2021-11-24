import React, { useState } from 'react';
import styled from 'styled-components';
import arrow from '../../../../assets/images/arrow-up-inverse.png';
import ImageList from './ImageList';

const Images = ()=> {
    const [ fileImage, setFileImage ] = useState("");

    const saveFileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
      if(e.target.files) {
        const selectedImage = e.target.files[0];
        // const formData = new FormData();
        // formData.append('file', selectedImage);
        setFileImage(URL.createObjectURL(selectedImage));
      }

      console.log(e.target.files);
    }

    return (
        <Container>
            <h3>Images</h3>
            <ImageList />
            {/* <AddFile>
                <Circle><img src={arrow} /></Circle>
                <InputArea>
                  <UploadInput type="file" multiple accept="image/*"onChange={saveFileImage} />
                  <UploadBtn>Add File</UploadBtn>
                </InputArea>
                <p>or drop files to upload</p>
                {fileImage && <UploadedImage alt="sample" src={fileImage} />}
            </AddFile> */}
        </Container>
    );
};

export default Images;

const Container = styled.div`
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
`;

const InputArea = styled.div`
  position: relative;
`

const UploadInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  cursor: pointer;
  opacity: 0;
  cursor: pointer;
`

const UploadBtn = styled.button`
  width: 100px;
  padding: 10px;
  text-align: center;
  border-radius: 4px;
  border: solid 1px #babfc3;
  font-family: NanumSquare_acB;
  font-size: 14px;
  color: rgb(55, 69, 84);
  cursor: pointer;
`

const UploadedImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`