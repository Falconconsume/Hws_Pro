import React, { Component } from "react";
import { contacts } from "./data";
import Form from "./components/Form";
import Contacts from "./components/Contacts";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: contacts,
      form: false,
    };
  }

  setContact = (contact) => {
    this.setState({ contact });
  };

  handleAdd = (newContact) => {
    this.setContact([...this.state.contact, newContact]);
  };

  handleDelete = (id) => {
    const newContacts = this.state.contact.filter((e) => e.id !== id);
    this.setContact(newContacts);
  };

  setForm = (form) => {
    this.setState({ form });
  };

  render() {
    return (
      <div>
        <Contacts
          contacts={this.state.contact}
          setForm={this.setForm}
          handleDelete={this.handleDelete}
        />
        <Form
          active={this.state.form}
          setActive={this.setForm}
          handleAdd={this.handleAdd}
        />
      </div>
    );
  }
}
