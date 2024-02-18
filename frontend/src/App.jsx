//import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Front from './pages/Front';
import RegistrationQ from './pages/RegistrationQ';
import LoginQ from './pages/LoginQ';
import PLogin from './pages/PLogin';
import DLogin from './pages/DLogin';
import DRegister from './pages/DRegister';
import PRegister from './pages/PRegister';
import DHome from './pages/DHome';
import PHome from './pages/PHome';
import CreatePatient from './pages/CreatePatient';
import DeletePatient from './pages/DeletePatient';
import EditPatient from './pages/EditPatient';
import EditDoctor from './pages/EditDoctor';
import DProfile from './pages/DProfile';
import PProfile from './pages/PProfile';
import Navbar from './components/Navbar';
import PMeds from './pages/PMeds'
import GreenZone from './pages/GreenZone';
import YellowZone from './pages/YellowZone';
import RedZone from './pages/RedZone';
import Animations from './pages/Animations';
import Games from './pages/Games';
import Surveys from './pages/Surveys';
import Medsheet from './pages/Medsheet';
import MessagePatient from './pages/MessagePatient';
import DPinfo from './pages/DPinfo';
import {Toaster } from 'react-hot-toast';
import axios from 'axios';
import Resources from './pages/Resources';
import DAlerts from './pages/DAlerts';
import { UserContextProvider } from '../context/userContext';

axios.defaults.baseURL = 'http://localhost:5555';
axios.defaults.withCredentials = true;
const App = () => {
  return(
    <UserContextProvider>
    <Navbar/>
    <Toaster position = 'bottom-center' toastOptions={{duration: 2500}} />
    <Routes>
      <Route path = '/' element = {<Front />} />
      <Route path = '/register' element = {<RegistrationQ />} />
      <Route path = '/login' element = {<LoginQ />} />
      <Route path = '/patients/login' element = {<PLogin />} />
      <Route path = '/doctor/login' element = {<DLogin />} />
      <Route path = '/patients/register' element = {<PRegister />} />
      <Route path = '/doctor/register' element = {<DRegister />} />
      <Route path = '/patients/home' element = {<PHome />} />
      <Route path = '/doctor/home' element = {<DHome/>} />
      <Route path = '/doctor/create' element = {<CreatePatient/>} />
      <Route path = '/patients/create' element = {<CreatePatient/>} />
      <Route path = '/patients/delete/:id' element = {<DeletePatient/>} />
      <Route path = '/patients/profile/:id' element = {<PProfile/>} />
      <Route path = '/doctor/profile/:id' element = {<DProfile/>} />
      <Route path = '/doctor/patientInfo/:id' element = {<DPinfo/>} />
      <Route path = '/doctor/patientInfo/changeMedication/:id' element = {<PMeds/>} />
      <Route path = '/patients/edit/:id' element = {<EditPatient/>} />
      <Route path = '/doctor/edit/:id' element = {<EditDoctor/>} />
      <Route path = '/patients/green/:id' element = {<GreenZone/>} />
      <Route path = '/patients/yellow/:id' element = {<YellowZone/>} />
      <Route path = '/patients/red/:id' element = {<RedZone/>} />
      <Route path = '/patients/animations/:id' element = {<Animations/>} />
      <Route path = '/patients/games/:id' element = {<Games/>} />
      <Route path = '/patients/surveys/:id' element = {<Surveys/>} />
      <Route path = '/patients/medsheet/:id' element = {<Medsheet/>} />
      <Route path = '/doctor/message/:id' element = {<MessagePatient/>} />
      <Route path = '/resources' element = {<Resources/>} />
      <Route path = '/doctor/alerts/:id' element = {<DAlerts/>} />
    </Routes>
    </UserContextProvider>
  );
};
export default App