import ListContacts from "../components/ListContacts";

export default function Contacts({ contacts, deleteContact, setActive }) {
  return (
    <div>
      <ListContacts contacts={contacts} deleteContact={deleteContact} />
      <button
        onClick={() => setActive(true)}
        className="btn_add-contact text-2xl text-stone-900 "
      >
        Додати контакт
      </button>
    </div>
  );
}
