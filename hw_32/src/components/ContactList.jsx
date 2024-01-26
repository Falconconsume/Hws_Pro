import React, { Component } from "react";

export class ContactList extends Component {
  render() {
    const { contacts, deleteNewContactHandler } = this.props;
    return (
      <div>
        <h3>Телефонні контакти:</h3>
        <ul className="list_group">
          {contacts.map((contact) => (
            <li className="list_group-item" key={contact.id}>
              <p>
                {contact.name} {contact.surname}: {contact.phone}
              </p>
              <br />
              <button
                onClick={() => deleteNewContactHandler(contact.id)}
                className="btn-delete"
              >
                Видалити
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactList;
