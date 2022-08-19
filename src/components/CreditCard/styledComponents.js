// Style your elements here
import styled from 'styled-components'

export const CardCont = styled.div`
  background-color: #3b4b69;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  margin-top: 50px;
  font-size: 25px;
  border-bottom: 2px solid #ffd773;
`
export const Card = styled.div`
  width: 50%;
  height: 250px;
  padding-left: 25px;
  padding-top: 20px;
  padding-right: 25px;
  margin-top: 100px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 1px 3px 4px 5px #475569;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
`
export const CardNumber = styled.p`
  color: #d3d9e0;
  font-size: 32px;
  font-family: 'Roboto';
`
export const CardHolder = styled.p`
  color: #d3d9e0;
  font-size: 15px;
  font-family: 'Roboto';
  margin-top: -5px;
`
export const CardHolderName = styled.p`
  color: #d3d9e0;
  font-size: 20px;
  font-family: 'Roboto';
  margin-top: -5px;
`
export const InPutCont = styled.div`
  width: 50%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 3px 4px 5px #d3d9e0;
`
export const BgCont = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
`
export const InputDiv = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const MethodName = styled.h1`
  color: #344e7a;
  font-size: 25px;
  font-family: 'Roboto';
`
export const Input = styled.input`
  padding-left: 10px;
  width: 80%;
  margin-top: 20px;
  height: 35px;
  outline: none;
  border-width: 0px;
  font-weight: 600;
  color: #475569;
  box-shadow: 1px 3px 4px 5px #d3d9e0;
`
