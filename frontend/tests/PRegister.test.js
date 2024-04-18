import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import PRegister from '../src/pages/PRegister';
import '@testing-library/jest-dom';

jest.mock('axios');

describe('Patient Registration', () => {
  test('Registration form appears on Patient Registration page', () => {
    const component = render(
      <Router>
        <PRegister />
      </Router>);
    const name = component.getByText("Patient Name");
    expect(name).toBeInTheDocument();

    const age = component.getByText("Patient Age");
    expect(age).toBeInTheDocument();

    const pass = component.getByText("Password");
    expect(pass).toBeInTheDocument();

    const p_email = component.getByText("Primary Caregiver (Emergency Contact) Email");
    expect(p_email).toBeInTheDocument();

    const p_name = component.getByText("Primary Caregiver (Emergency Contact) Name");
    expect(p_name).toBeInTheDocument();

    const p_cell = component.getByText("Primary Caregiver (Emergency Contact) Cell Phone Number");
    expect(p_cell).toBeInTheDocument();

    const p_work = component.getByText("Primary Caregiver (Emergency Contact) Work Phone Number");
    expect(p_work).toBeInTheDocument();

    const p_relation = component.getByText("Primary Caregiver (Emergency Contact) Relation to Patient");
    expect(p_relation).toBeInTheDocument();

    const s_name = component.getByText("Secondary Caregiver Name");
    expect(s_name).toBeInTheDocument();

    const s_cell = component.getByText("Secondary Caregiver Cell Phone Number");
    expect(s_cell).toBeInTheDocument();

    const s_work = component.getByText("Secondary Caregiver Work Phone Number");
    expect(s_work).toBeInTheDocument();

    const s_relation = component.getByText("Secondary Caregiver Relation to Patient");
    expect(s_relation).toBeInTheDocument();

    const prov_email = component.getByText("Provider Email");
    expect(prov_email).toBeInTheDocument();
  });

  test('Patient Registration form allows Patient to successfully register.', async () => {
    const { getByText, getByPlaceholderText } = render(
      <Router>
        <PRegister />
      </Router>
    );

    const name = getByPlaceholderText("Enter Patient Name");
    fireEvent.change(name, { target: { value: 'Test Automation' } });

    const age = getByPlaceholderText("Enter Patient Age");
    fireEvent.change(age, { target: { value: '4' } });

    const pass = getByPlaceholderText("Enter Password");
    fireEvent.change(pass, { target: { value: 'Password1' } });

    const p_email = getByPlaceholderText("Enter Primary Caregiver email");
    fireEvent.change(p_email, { target: { value: 'testautomation1@ex.com' } });

    const p_name = getByPlaceholderText("Enter Primary Caregiver Name");
    fireEvent.change(p_name, { target: { value: 'Test parent' } });

    const p_cell = getByPlaceholderText("Enter Primary Caregiver Cell Phone Number");
    fireEvent.change(p_cell, { target: { value: '2051112222' } });

    const p_work = getByPlaceholderText("Enter Primary Caregiver Work Phone Number");
    fireEvent.change(p_work, { target: { value: '2052223333' } });

    const p_relation = getByPlaceholderText("Enter Primary Caregiver Relation to Patient");
    fireEvent.change(p_relation, { target: { value: 'Parent' } });

    const s_name = getByPlaceholderText("Enter Secondary Caregiver Name");
    fireEvent.change(s_name, { target: { value: 'Test parent 2' } });

    const s_cell = getByPlaceholderText("Enter Secondary Caregiver Cell Phone Number");
    fireEvent.change(s_cell, { target: { value: '2053334444' } });

    const s_work = getByPlaceholderText("Enter Secondary Caregiver Work Phone Number");
    fireEvent.change(s_work, { target: { value: '2054445555' } });

    const s_relation = getByPlaceholderText("Enter Secondary Caregiver Relation to Patient");
    fireEvent.change(s_relation, { target: { value: 'Parent' } });

    const prov_email = getByPlaceholderText("Enter Provider Email");
    fireEvent.change(prov_email, { target: { value: 'prov@ex.com' } });

    const submitButton = getByText("Register");
    fireEvent.click(submitButton);

    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));

    expect(axios.post).toHaveBeenCalledWith('/patients/register', {
      email: 'testautomation1@ex.com',
      password: 'Password1',
      age: '4',
      prim_ec_cell: '2051112222',
      prim_ec_relationship: 'Parent',
      prim_ec_work: '2052223333',
      prim_emergency_contact: 'Test parent',
      sec_ec_cell: '2053334444',
      sec_ec_relationship: 'Parent',
      sec_ec_work: '2054445555',
      sec_emergency_contact: 'Test parent 2',
      name: 'Test Automation',
      provider_email: 'prov@ex.com'
    });
  });

});
