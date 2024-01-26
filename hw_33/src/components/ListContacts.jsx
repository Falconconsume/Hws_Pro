export default function ListContacts({ contacts, deleteContact }) {
  return (
    <div className="list">
      <h1 className="text-3xl	text-center">Список контактів</h1>
      <ul>
        {contacts.map((contact) => (
          <li
            className="list_contact bg-violet-400	transition ease-in-out delay-150 "
            key={contact.id}
          >
            <p className="text-lg bg-midnight ">
              {contact.name} {contact.surname} : {contact.phone}
            </p>
            <button
              onClick={() => deleteContact(contact.id)}
              className="rounded-full btn-delete"
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
