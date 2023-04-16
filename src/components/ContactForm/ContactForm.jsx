import React, { Component } from 'react';
import { Formik } from 'formik';
import { validationSchema } from '../validationSchema';
import {
  FormContainer,
  FormEl,
  FormLabel,
  FormInput,
  ErrorMessageForUser,
  FormButton,
} from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit({ ...values });
    resetForm();
  };

  render() {
    return (
      <FormContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={this.handleSubmit}
        >
          {({ values, handleChange }) => (
            <FormEl>
              <FormLabel htmlFor="name">
                Name
                <FormInput
                  type="text"
                  name="name"
                  placeholder="Please enter name..."
                  value={values.name}
                  onChange={handleChange}
                />
                <ErrorMessageForUser name="name" component="div" />
              </FormLabel>
              <FormLabel htmlFor="number">
                Number
                <FormInput
                  type="tel"
                  name="number"
                  placeholder="Please enter a phone number..."
                  value={values.number}
                  onChange={handleChange}
                />
                <ErrorMessageForUser name="number" component="div" />
              </FormLabel>
              <FormButton type="submit">Add contact</FormButton>
            </FormEl>
          )}
        </Formik>
      </FormContainer>
    );
  }
}
