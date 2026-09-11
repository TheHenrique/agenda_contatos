import { Container, Input, Message } from "./style";
import { Contact } from "../Contact";
import { RootReducer } from '../../store'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

export function ContactList(){
  const {items} = useSelector((state: RootReducer) => state.contact)
  const navigate = useNavigate()
  const [filtered, setFiltered] = useState('')
  function filterContacts(){
    if (filtered.length > 0){
      return items.filter((contact) => contact.name.toLocaleLowerCase().search(filtered.toLocaleLowerCase()) >=0)
    }else{
      return items
    }
  }

  const filteredContacts = filterContacts()
  return (
    <Container>
      <div>
        <h1>Contatos</h1>
        <Input onChange={(e) => setFiltered(e.target.value)}
          placeholder="pesquisar contato"/>
      </div>
      {filteredContacts.length<=0 && <Message>Sem contatos</Message>}
      {filteredContacts.map(contact =>
      <Contact onclick={() =>
        navigate(`details/${contact.id}`)}
        key={contact.id}
        name={contact.name}
        number={contact.number}/>)}
    </Container>
  )
}
