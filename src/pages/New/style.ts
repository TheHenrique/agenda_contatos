import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 80px 16px;
  button:first-child{
    color: gray;
    position: absolute;
    top: 10%;
    left: 16px;
  }
`
export const Label = styled.label`
  font-size: 14px;
  color: gray;
  `
export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  padding-top: 8px;
  outline: none;
`
export const ButtonSave = styled.button`
  background-color: green;
  padding: 8px;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
`
