import { Container } from "./style";
type Props ={
  onclick:  () => void
}

export function ButtonAdd({onclick}: Props){
  return <Container onClick={onclick}>+</Container>
}
