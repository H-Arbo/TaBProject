//import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Front from './pages/Front';
import AboutUs from './pages/AboutUs';
import RegistrationQ from './pages/RegistrationQ';
import LoginQ from './pages/LoginQ';
import PLogin from './pages/PLogin';
import DLogin from './pages/DLogin';
import DRegister from './pages/DRegister';
import PRegister from './pages/PRegister';
import DHome from './pages/DHome';
import PHome from './pages/PHome';
import DeletePatient from './pages/DeletePatient';
import EditPatient from './pages/EditPatient';
import EditDoctor from './pages/EditDoctor';
import DProfile from './pages/DProfile';
import PProfile from './pages/PProfile';
import PMeds from './pages/PMeds'
import GreenZone from './pages/GreenZone';
import YellowZone from './pages/YellowZone';
import RedZone from './pages/RedZone';
import Animations from './pages/Animations';
import Surveys from './pages/Surveys';
import ActionSheet from './pages/ActionSheet';
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
    <Toaster position = 'bottom-center' toastOptions={{duration: 2500}} />
    <Routes>
      <Route path = '/' element = {<Front />} />
      <Route path = '/register' element = {<RegistrationQ />} />
      <Route path = '/login' element = {<LoginQ />} />
      <Route path = '/aboutUs' element = {<AboutUs />} />
      <Route path = '/patients/login' element = {<PLogin />} />
      <Route path = '/doctor/login' element = {<DLogin />} />
      <Route path = '/patients/register' element = {<PRegister />} />
      <Route path = '/doctor/register' element = {<DRegister />} />
      <Route path = '/patients/home' element = {<PHome />} />
      <Route path = '/doctor/home' element = {<DHome/>} />
      <Route path = '/patients/delete' element = {<DeletePatient/>} />
      <Route path = '/patients/profile' element = {<PProfile/>} />
      <Route path = '/doctor/profile' element = {<DProfile/>} />
      <Route path = "/doctor/patientInfo" element={<DPinfo />} />
      <Route path = '/doctor/patientInfo/changeMedication' element = {<PMeds/>} />
      <Route path = '/patients/profile' element = {<EditPatient/>} />
      <Route path = '/doctor/edit' element = {<EditDoctor/>} />
      <Route path = '/patients/green' element = {<GreenZone/>} />
      <Route path = '/patients/yellow' element = {<YellowZone/>} />
      <Route path = '/patients/red' element = {<RedZone/>} />
      <Route path = '/patients/animations' element = {<Animations/>} />
      <Route path = '/patients/surveys' element = {<Surveys/>} />
      <Route path = '/patients/actionSheet' element = {<ActionSheet/>} />
      <Route path = '/doctor/message' element = {<MessagePatient/>} />
      <Route path = '/resources' element = {<Resources/>} />
      <Route path = '/doctor/alerts' element = {<DAlerts/>} />
    </Routes>
    </UserContextProvider>
  );
};
export default App