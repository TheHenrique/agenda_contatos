import { Container } from "./style";
type contactToShow = {
  name: string
  number: string
  onclick: () => void
}


export function Contact({name, number, onclick}: contactToShow){
  return (
    <Container  onClick={onclick}>
      <span>{name}</span>
      <span>{number}</span>
    </Container>
  )
}
