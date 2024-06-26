import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import DLogin from '../src/pages/DLogin';
import '@testing-library/jest-dom';

jest.mock('axios');

describe('Doctor Login', () => {
  test('Login form appears on Doctor Login page', () => {
    const component = render(
      <Router>
        <DLogin />
      </Router>);
    const email = component.getByText("Email");
    expect(email).toBeInTheDocument();

    const pass = component.getByText("Password");
    expect(pass).toBeInTheDocument();
  });

  test('Login form allows pre-registered Doctor to successfully login.', async () => {
    const { getByText, getByPlaceholderText } = render(
      <Router>
        <DLogin />
      </Router>
    );

    const email = getByPlaceholderText("Enter email");
    fireEvent.change(email, { target: { value: 'prov@ex.com' } });

    const pass = getByPlaceholderText("Enter password");
    fireEvent.change(pass, { target: { value: 'Passwrod1' } });

    const submitButton = getByText("Login");
    fireEvent.click(submitButton);

    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));

    expect(axios.post).toHaveBeenCalledWith('/doctor/login', {
      email: 'prov@ex.com',
      password: 'Passwrod1',
    });
  });
});
