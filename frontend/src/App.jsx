//import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Front from './pages/Front';
import Home from './pages/Home';
import CreatePatient from './pages/CreatePatient';
import DeletePatient from './pages/DeletePatient';
import EditPatient from './pages/EditPatient';
import ShowPatient from './pages/ShowPatient';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Resources from './pages/Resources';

const App = () => {
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path = '/' element = {<Front />} />
      <Route path = '/register' element = {<Register />} />
      <Route path = '/login' element = {<Login />} />
      <Route path = '/patients/home' element = {<Home />} />
      <Route path = '/patients/create' element = {<CreatePatient/>} />
      <Route path = '/patients/delete/:id' element = {<DeletePatient/>} />
      <Route path = '/patients/edit/:id' element = {<EditPatient/>} />
      <Route path = '/patients/info/:id' element = {<ShowPatient/>} />
      <Route path = '/resources' element = {<Resources/>} />
    </Routes>
    </>
  );
};

export default App