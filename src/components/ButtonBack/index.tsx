import { Container } from "./style";
type Props ={
  onclick: ()=> void
}
export function ButtonBack({onclick}: Props){
  return(
    <Container onClick={onclick}>&#8810;Voltar</Container>
  )
}
