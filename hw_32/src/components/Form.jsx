import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: { name: "", surname: "", phone: "" },
    };
  }

  addhandleContactChange = (e) => {
    this.setState({
      inputValue: { ...this.state.inputValue, [e.target.name]: e.target.value },
    });
  };

  handleSubmitForm = () => {
    this.props.addNewContactHandler(this.state.inputValue);
    this.setState({ inputValue: { name: "", surname: "", phone: "", id: 11 } });
    this.props.setActive(false);
  };

  render() {
    return (
      <section
        className={this.props.active ? "modal_form active" : "modal_form"}
        onClick={() => this.props.setActive(false)}
      >
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <h1 className="title_contact">Форма оформлення контакту</h1>
          <form action="submit">
            <input
              className="input_form"
              placeholder="Введіть ім'я"
              type="text"
              name="name"
              value={this.state.inputValue.name}
              onChange={this.addhandleContactChange}
            />
            <input
              className="input_form"
              placeholder="Введіть прізвище"
              type="text"
              name="surname"
              value={this.state.inputValue.surname}
              onChange={this.addhandleContactChange}
            />
            <input
              className="input_form"
              placeholder="Введіть номер телефону"
              type="text"
              name="phone"
              value={this.state.inputValue.phone}
              onChange={this.addhandleContactChange}
            />
          </form>
          <div className="btn-form">
            <button className="btnClick" onClick={this.handleSubmitForm}>
              Зберегти
            </button>
            <button
              className="btnClick"
              onClick={() => this.props.setActive(false)}
            >
              Скасувати
            </button>
          </div>
        </div>
      </section>
    );
  }
}
