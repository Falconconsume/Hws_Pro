import React, { Component } from "react";
import ContactList from "./ContactList";

export default class Contacts extends Component {
  render() {
    const { setForm,deleteNewContactHandler,contacts } = this.props;
    return (
      <div>
        <section className="section_contacts">
          <ContactList  contacts = {contacts} deleteNewContactHandler = {deleteNewContactHandler} />
          <button onClick={() => setForm(true)} className="btn-add-contact">
            Додати контакт
          </button>
        </section>
      </div>
    );
  }
}
