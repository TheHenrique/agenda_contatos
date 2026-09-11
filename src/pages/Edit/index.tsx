import { FormEvent, useState } from "react";
import { SmartPhone } from "../../components/Smartphone";
import { editContact } from "../../store/reducers/contact";
import { ButtonCancel, ButtonSave, Container, Input, Label } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { Contact } from "../../models/Contact";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonBack } from "../../components/ButtonBack";
import { RootReducer } from "../../store";

export function Edit(){
  const contacts = useSelector((state: RootReducer) => state.contact)
  const {id}  = useParams()
  const contact = contacts.items.filter(contact => contact.id === parseInt(id))[0]

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [name, setName] = useState(`${contact.name}`)
  const [number, setNumber] = useState(`${contact.number}`)
  const [email, setEmail] = useState(`${contact.email}`)
  function saveContact(event: FormEvent){
    event.preventDefault()
    if(id === undefined){
      return navigate('/')
    }
    const contactToEdit = new Contact(
      name,
      number,
      email,
      parseInt(id)
    )
    dispatch(editContact(contactToEdit))
    navigate(`/details/${id}`)
  }

  return(
    <SmartPhone>
      <Container onSubmit={saveContact}>
        <ButtonBack onclick={() => navigate('/')}/>
        <h2>Editando contato...</h2>
        <div>
          <Label htmlFor="name">Nome:</Label>
          <Input value={name} placeholder="ex: João Sousa" onChange={e => setName(e.target.value)} type="text" id="name" required/>
        </div>
        <div>
          <Label htmlFor="number">Número:</Label>
          <Input value={number} placeholder="ex: 11 98888-9999" onChange={e => setNumber(e.target.value)} type="tel" id="number" required/>
        </div>
        <div>
          <Label htmlFor="name">E-mail:</Label>
          <Input value={email} placeholder="ex: exemplo@mail.com" onChange={e => setEmail(e.target.value)} type="email" id="name" required/>
        </div>
        <div className="cancelAndDelete">
          <ButtonCancel type="button" onClick={() => navigate(`/details/${id}`)}>Cancelar</ButtonCancel>
          <ButtonSave type="submit">Salvar</ButtonSave>
        </div>
    </Container>
    </SmartPhone>
  )
}
