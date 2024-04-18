import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import PLogin from '../src/pages/PLogin';
import '@testing-library/jest-dom';

jest.mock('axios');

describe('Patient Login', () => {
  test('Login form appears on Patient Login page', () => {
    const component = render(
      <Router>
        <PLogin />
      </Router>);
    const email = component.getByText("Email");
    expect(email).toBeInTheDocument();

    const pass = component.getByText("Password");
    expect(pass).toBeInTheDocument();
  });

  test('Login form allows pre-registered Patient to successfully login.', async () => {
    const { getByText, getByPlaceholderText } = render(
      <Router>
        <PLogin />
      </Router>
    );

    const email = getByPlaceholderText("Enter email");
    fireEvent.change(email, { target: { value: 'hgf@ex.com' } });

    const pass = getByPlaceholderText("Enter password");
    fireEvent.change(pass, { target: { value: 'Password1' } });

    const submitButton = getByText("Login");
    fireEvent.click(submitButton);

    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));

    expect(axios.post).toHaveBeenCalledWith('/patients/login', {
      email: 'hgf@ex.com',
      password: 'Password1',
    });
  });
});
