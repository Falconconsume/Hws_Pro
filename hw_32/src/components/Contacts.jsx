import React, { Component } from "react";

export default class Contacts extends Component {
  render() {
    const { contacts, setForm, handleDelete } = this.props;
    return (
      <div>
        <section className="section_contacts">
          <ul className="list_group">
            <h3>Телефонні контакти:</h3>
            {contacts.map((contact) => (
              <li className="list_group-item" key={contact.id}>
                <p>
                  {contact.name} {contact.surname}: {contact.phone}
                </p>
                <br />
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="btn-delete"
                >
                  Видалити
                </button>
              </li>
            ))}
          </ul>
          <button onClick={() => setForm(true)} className="btn-add-contact">
            Додати контакт
          </button>
        </section>
      </div>
    );
  }
}
