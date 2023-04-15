import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  FormContainer,
  Form,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = event => {
    event.preventDefault();
    const id = nanoid();
    const { name, number } = this.state;
    const contact = { id, name, number };

    this.props.onSubmit(contact);
    this.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <FormContainer>
        <Form onSubmit={this.handleSubmit}>
          <FormLabel>
            Name
            <FormInput
              type="text"
              name="name"
              pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Please enter name..."
              required
              value={name}
              onChange={this.handleChange}
            />
          </FormLabel>
          <FormLabel>
            Number
            <FormInput
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder="Please enter a phone number..."
              required
              value={number}
              onChange={this.handleChange}
            />
          </FormLabel>
          <FormButton type="submit">Add contact</FormButton>
        </Form>
      </FormContainer>
    );
  }
}
