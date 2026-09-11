import styled from "styled-components";
export const Container = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 25%;
  gap: 8px;
  text-align: center;

  img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: auto;
  }
  div{
    display: flex;
  }

`
export const ButtonDleted = styled.button`
  width: 90px;
  margin: 0 auto;
  background-color: red;
  padding: 8px 16px;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 16px;
`
export const ButtonEdit = styled(ButtonDleted)`
  background-color: orange;
`


