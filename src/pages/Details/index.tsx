import { useNavigate } from "react-router-dom";
import { SmartPhone } from "../../components/Smartphone";
import { ButtonDleted, ButtonEdit, Container } from "./style";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { removeContact } from "../../store/reducers/contact";
import { ButtonBack } from "../../components/ButtonBack";

export function Details() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const contacts = useSelector((state: RootReducer) => state.contact.items)
  const { id } = useParams()
  function deleteContact(){
    if(id !== undefined){
      const confirmation = confirm("Você tem certeza que deseja deletar este contato?")
      if (confirmation){
        dispatch(removeContact(parseInt(id)))
        navigate('/')
      }else{
        return
      }
    }else{
      alert("erro inesperado!")
    }
  }
  if (id !== undefined) {
    const contact = contacts.find(contact => contact.id === parseInt(id))

    return (
      <SmartPhone>
        <Container>
          <ButtonBack onclick={() => navigate('/')} />
          <img src="https://via.placeholder.com/100x100" />
          <h2>{contact?.name}</h2>
          <span>{contact?.number}</span>
          <span>{contact?.email}</span>
          <div>
            <ButtonEdit onClick={()=> navigate(`/edit/${contact?.id}`)}>Editar</ButtonEdit>
            <ButtonDleted type="button" onClick={deleteContact}>Apagar</ButtonDleted>
          </div>
        </Container>
      </SmartPhone>
  )}
}
