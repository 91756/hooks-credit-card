// Write your code here
import {useState} from 'react'
import {
  CardCont,
  Heading,
  Card,
  CardNumber,
  CardHolder,
  CardHolderName,
  InPutCont,
  BgCont,
  InputDiv,
  MethodName,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNo] = useState('')
  const [name, setName] = useState('')

  return (
    <BgCont>
      <CardCont>
        <Heading>CREDIT CARD</Heading>
        <Card data-testid=" creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <CardHolder>CARDHOLDER NAME</CardHolder>
          <CardHolderName>{name}</CardHolderName>
        </Card>
      </CardCont>
      <InputDiv>
        <InPutCont>
          <MethodName>Payment Method</MethodName>
          <Input
            placeholder="Card Number"
            onChange={event => {
              setCardNo(event.target.value)
            }}
          />
          <Input
            placeholder="Cardholder Name"
            onChange={event => {
              setName(event.target.value)
            }}
          />
        </InPutCont>
      </InputDiv>
    </BgCont>
  )
}
export default CreditCard
