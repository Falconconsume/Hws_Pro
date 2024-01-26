import React, { useState } from "react";
import "./styles/index.css";
import { contacts } from "./data";
import Contacts from "./components/Contacts";
import Form from "./components/Form";

function App() {
  const [contact, setContact] = useState(contacts);
  const [active, setActive] = useState(false);

  const deleteContact = (id) => {
    const newList = contact.filter((e) => id !== e.id);
    setContact(newList);
  };

  const addContact = (newContact) => {
    setContact([...contact, newContact]);
  };

  return (
    <div className="container mx-auto px-20 content_center">
      <Contacts
        contacts={contact}
        setContact={setContact}
        deleteContact={deleteContact}
        setActive={setActive}
      />
      <Form isActive={active} setActive={setActive} addContact={addContact} />
    </div>
  );
}

export default App;
