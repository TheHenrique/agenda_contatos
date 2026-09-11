import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../../models/Contact";

type ContactState = {
  items: Contact[]
}
const initialState: ContactState ={
  items: [
    {
      name: "Maurício",
      number: "1243423525",
      email: "mauricio@email.com",
      id: 423525
    },
    {
      name: "Marcos",
      number: "1243423525",
      email: "marcos@email.com",
      id: 12325
    },
    {
      name: "mauricio",
      number: "1243423525",
      email: "mauricio@email.com",
      id: 33423525
    },
    {
      name: "João",
      number: "1243423525",
      email: "joao@email.com",
      id: 233423525
    },
    {
      name: "Jose",
      number: "1243423525",
      email: "jose@email.com",
      id: 1223525
    },
    {
      name: "Patricia",
      number: "1243423525",
      email: "patricia@email.com",
      id: 12334
    },
    {
      name: "Giovana",
      number: "1243423525",
      email: "giovana@email.com",
      id: 123342
    },
    {
      name: "Gian Sousa",
      number: "1243423525",
      email: "gian@email.com",
      id: 123342352
    },
    {
      name: "Lucas",
      number: "1243423525",
      email: "lucas@email.com",
      id: 12334235
    },
    {
      name: "Gessica",
      number: "1243423525",
      email: "gessica@email.com",
      id: 12
    },
    {
      name: "Luciano",
      number: "1243423525",
      email: "luciano@email.com",
      id: 1233425
    },
  ]
}

const ContactSlice = createSlice({
  name: "contact",
  initialState,
  reducers:{
    addContact: (state, action: PayloadAction<Contact>)=>{
      const contactExists = state.items.find(
        (contact) => contact.number === action.payload.number)
        if (contactExists){
          alert('Este número já existe na sua lista de contatos!')
        }else{
          state.items.push(action.payload)
        }
    },
    removeContact: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.items.findIndex(
        (contact) => contact.id === action.payload.id
      )
      if (contactIndex >= 0) {
        state.items[contactIndex] = action.payload
      }
      state
    }
    }
  })

export const { addContact, removeContact, editContact } = ContactSlice.actions
export default ContactSlice.reducer
