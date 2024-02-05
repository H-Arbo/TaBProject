import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import CreatePatient from './pages/CreatePatient';
import DeletePatient from './pages/DeletePatient';
import EditPatient from './pages/EditPatient';
import ShowPatient from './pages/ShowPatient';

const App = () => {
  return(
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/patients/create' element = {<CreatePatient/>} />
      <Route path = '/patients/delete/:id' element = {<DeletePatient/>} />
      <Route path = '/patients/edit/:id' element = {<EditPatient/>} />
      <Route path = '/patients/info/:id' element = {<ShowPatient/>} />
    </Routes>
  );
};

export default App