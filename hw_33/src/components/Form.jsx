import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form({ setActive, isActive, addContact }) {
  const notify = () =>
    toast.success("You added the contact! 🦄", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const objInput = { name: "", surname: "", phone: "", id: Math.random() };
  const [inputValue, setInputValue] = useState(objInput);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    addContact(inputValue);
    setInputValue(objInput);
    setActive(false);
  };

  const addSubmitToList = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <section
        className={isActive ? "modal_window active" : "modal_window"}
        onClick={() => setActive(false)}
      >
        <form
          className="modal__content"
          action="submit"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="text-center text-2xl">Форма оформлення контакту</h1>
          <input
            className="input_form"
            placeholder="Введіть ваше ім'я"
            type="text"
            name="name"
            value={inputValue.name}
            onChange={addSubmitToList}
          />
          <input
            className="input_form"
            placeholder="Введіть вашу фамілію"
            type="text"
            name="surname"
            value={inputValue.surname}
            onChange={addSubmitToList}
          />
          <input
            className="input_form"
            placeholder="Введіть ваш номер"
            type="text"
            name="phone"
            value={inputValue.phone}
            onChange={addSubmitToList}
          />
          <div className="flex justify-between">
            <button
              className="btn-form"
              onClick={(e) => {
                formSubmitHandler(e);
                notify();
              }}
            >
              Відправити
            </button>
            <button
              className="btn-form"
              onClick={(e) => {
                e.preventDefault();
                setActive(false);
              }}
            >
              Скасувати
            </button>
          </div>
        </form>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
