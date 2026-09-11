import styled from "styled-components";

export const Container = styled.main`
  width: 300px;
  height: 520px;
  border: 8px solid rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
`
export const Header = styled.header`
  max-width: 100%;
  height: 24px;
  padding: 0 16px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span{
    width: 20px;
    height: 24px;
    background-color: black;
    border-radius: 0 0 10px 10px;
    position: absolute;
    left: calc(50% - 10px);
    top: -1px;
  }
`
export const Footer = styled.footer`
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
`
