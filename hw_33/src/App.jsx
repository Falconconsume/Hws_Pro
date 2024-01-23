import { contacts } from "./data";
import Form from "./components/Form";
import { useState } from "react";
import Contacts from "./components/Contacts";

function App() {
  const [contact, setContact] = useState(contacts);
  const [form, setForm] = useState(false);
  const handleDelete = (id) => {
    const newContacts = contact.filter((e) => e.id !== id);
    setContact(newContacts);
  };
  const handleAdd = (newContact) => {
    setContact([...contact,newContact])
  }

  return (
    <div>
      <Contacts
        contacts={contact}
        setForm={setForm}
        handleDelete={handleDelete}
      />
      <Form active={form} setActive={setForm} handleAdd = {handleAdd}/>
    </div>
  );
}

export default App;
