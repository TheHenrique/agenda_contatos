import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 74px);
  padding: 16px;
  overflow-y: auto;
  position: relative;
`

export const Input = styled.input`
  max-width: 90%;
  width: 100%;
  border: 1px solid #ccc;
  background-color: transparent;
  border-radius: 8px;
  padding: 8px;
  outline: none;
`
export const Message = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 80px;
  text-align: center;
  color: gray;
`
