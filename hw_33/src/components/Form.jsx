import React, { useState } from "react";

export default function Form({ active, setActive, handleAdd }) {
  let objInput = { name: "",surname: "", phone: "" };
  const [inputValue, setInputValue] = useState(objInput);
  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    handleAdd(inputValue);
    setInputValue(objInput);
    setActive(false);
  };
  

  return (
    <section
      className={active ? "modal_form active" : "modal_form"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <h1 className="title_contact">Форма оформлення контакту</h1>
        <input
          className="input_form"
          placeholder="Введіть ім'я"
          type="text"
          name="name"
          value={inputValue.name}
          onChange={handleChange}
        />
        <input
          className="input_form"
          placeholder="Введіть прізвище"
          type="text"
          name="surname"
          value={inputValue.surname}
          onChange={handleChange}
        />
        <input
          className="input_form"
          placeholder="Введіть номер телефону"
          type="text"
          name="phone"
          value={inputValue.phone}
          onChange={handleChange}
        />
        <div className="btn-form">
          <button className="btnClick" onClick={handleSubmit}>
            Зберегти
          </button>
          <button className="btnClick" onClick={() => setActive(false)}>
            Скасувати
          </button>
        </div>
      </div>
    </section>
  );
}
