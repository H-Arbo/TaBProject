import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import DRegister from '../src/pages/DRegister';
import '@testing-library/jest-dom';

jest.mock('axios');

describe('Doctor Registration', () => {
  test('Login form appears on Doctor Registration page', () => {
    const component = render(
      <Router>
        <DRegister />
      </Router>);
    const email = component.getByText("Email");
    expect(email).toBeInTheDocument();

    const pass = component.getByText("Password");
    expect(pass).toBeInTheDocument();

    const phone = component.getByText("Phone");
    expect(phone).toBeInTheDocument();

    const name = component.getByText("Name");
    expect(name).toBeInTheDocument();
  });

  test('Doctor Registration form allows Doctor to successfully register.', async () => {
    const { getByText, getByPlaceholderText } = render(
      <Router>
        <DRegister />
      </Router>
    );

    const email = getByPlaceholderText("Enter email");
    fireEvent.change(email, { target: { value: 'autotestreg@ex.com' } });

    const pass = getByPlaceholderText("Enter password");
    fireEvent.change(pass, { target: { value: 'Password1' } });

    const name = getByPlaceholderText("Enter name");
    fireEvent.change(name, { target: { value: 'Auto Test Reg' } });

    const phone = getByPlaceholderText("Enter phone number");
    fireEvent.change(phone, { target: { value: '2051118888' } });

    const submitButton = getByText("Register");
    fireEvent.click(submitButton);

    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));

    expect(axios.post).toHaveBeenCalledWith('/doctor/register', {
      email: 'autotestreg@ex.com',
      password: 'Password1',
      name: 'Auto Test Reg',
      phone: '2051118888'
    });
  });

});
