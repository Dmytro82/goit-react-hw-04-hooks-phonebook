import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Label, Button } from './Form.styled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = event => {
    const name = event.currentTarget.name;
    this.setState({ [name]: event.currentTarget.value });
  };
  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    const { handleSubmit, handleNameChange } = this;
    return (
      <Container onSubmit={handleSubmit}>
        <Label>
          Name
          <input
            name="name"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleNameChange}
          />
        </Label>
        <Label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleNameChange}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Container>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
