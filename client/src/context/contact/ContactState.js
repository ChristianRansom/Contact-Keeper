import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Kaila Ransom",
        email: "kailamcrafword@gmail.com",
        phone: "123-456-7890",
        type: "Wifey",
      },
      {
        id: 2,
        name: "Grace Atkinson",
        email: "grace@gmail.com",
        phone: "111-111-1111",
        type: "Sister",
      },
      {
        id: 3,
        name: "Jordan Edger",
        email: "jeggers@gmail.com",
        phone: "222-222-2222",
        type: "BFF",
      },
      {
        id: 4,
        name: "Garrett Atkinson",
        email: "gjatkinson@gmail.com",
        phone: "Finally-an-iphone",
        type: "Brother",
      },
    ],
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //Add Contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //Delete Contact

  //Set Current Contact

  //Clear Current Contact

  //Update Contact

  //Filter Contacts

  //Clear Filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts, addContact }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
