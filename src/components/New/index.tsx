import { FormEvent, useState } from "react";
import { SmartPhone } from "../../components/Smartphone";
import { addContact } from "../../store/reducers/contact";
import { ButtonSave, Container, Input, Label } from "./style";
import { useDispatch } from "react-redux";
import { Contact } from "../../models/Contact";
import { useNavigate } from "react-router-dom";
import { Button } from "../ButtonPhone";

export function New(){
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')

  function saveContact(event: FormEvent){
    event.preventDefault()
    const id = Date.now()
    const contactToAdd = new Contact(
      name,
      number,
      email,
      id
    )
    dispatch(addContact(contactToAdd))
    navigate('/')
  }

  return(
    <SmartPhone>
      <Container onSubmit={saveContact}>
        <Button value="&#8810;Voltar" onclick={() => navigate('/')}/>
        <h2>Adicionar contato</h2>
      <div>
        <Label htmlFor="name">Nome:</Label>
        <Input placeholder="ex: João Sousa" onChange={e => setName(e.target.value)} type="text" id="name" required/>
      </div>
      <div>
        <Label htmlFor="number">Número:</Label>
        <Input placeholder="ex: 11 98888-9999" onChange={e => setNumber(e.target.value)} type="tel" id="number" required/>
      </div>
      <div>
        <Label htmlFor="name">E-mail:</Label>
        <Input placeholder="ex: exemplo@mail.com" onChange={e => setEmail(e.target.value)} type="email" id="name" required/>
      </div>
      <ButtonSave type="submit">Salvar</ButtonSave>
    </Container>
    </SmartPhone>
  )
}
