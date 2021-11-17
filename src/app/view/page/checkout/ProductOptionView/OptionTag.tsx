import React from "react";
import styled from "styled-components";

interface OptionTagProps {
    id : string;
    groupId : string;
    groupName : string;
    name : string;
    getSelectedTags(e:React.ChangeEvent<HTMLInputElement>): void;
}

const OptionTag : React.FC<OptionTagProps> = (props) => {
    return (
        <>
            <RadioButton type="radio" id={props.name} value={props.id} name={props.groupId} onChange={props.getSelectedTags}/>
            <TagLabel htmlFor={props.name}>{props.name}</TagLabel>
        </>
    )
}

const RadioButton = styled.input`{
    display: none;

    &:checked + label {
        background-color: #7770ff;
        color: #ffffff;
    }
}`

const TagLabel = styled.label`{
    margin-right: 10px;
    padding: 12px 30px;
    border-radius: 4px;
    font-family: NanumSquare_acR;
    font-size: 17px;
    cursor: pointer;
    background-color: #f5f7fa;
    color: #959595; 
    transition: all 0.1s ease-in;
}`

export default OptionTag;