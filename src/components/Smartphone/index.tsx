import {Container, Header, Footer} from './style'
import { Button } from '../ButtonPhone'
import { useNavigate } from 'react-router-dom'
import { ButtonAdd } from '../ButtonAdd'
type Props ={
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
}
export function SmartPhone({children}: Props){
  const navigate = useNavigate()
  return (
    <Container>
      <Header>
        <p>10:00</p>
        <span></span>
        <p>&#9992;</p>
      </Header>
      {children}
      <Footer>
        <ButtonAdd onclick={() => navigate("/new")}/>
        <Button value='&#8652;' onclick={() => navigate("/")}/>
        <Button value='&#9737;' onclick={() => navigate("/")}/>
        <Button value='&#8810;' onclick={() => navigate("/")}/>
      </Footer>
    </Container>
  )
}
