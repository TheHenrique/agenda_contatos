import { Container } from "./style";

type Props = {
  value: string
  onclick: () => void
}

export function Button({value, onclick}: Props){
  return(
    <Container type="button" onClick={onclick}>{value}</Container>
  )
}
