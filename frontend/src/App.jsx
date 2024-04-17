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
import ChangeGreenMeds from './pages/ChangeGreenMeds'
import ChangeYellowMeds from './pages/ChangeYellowMeds'
import ChangeRedMeds from './pages/ChangeRedMeds'
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
import { UserContextProvider } from '../context/userContext';
import { ProtectedRoute } from './components/ProtectedRoutes';

axios.defaults.baseURL = 'http://http://cs495-spring2024-01.ua.edu:25432';
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
      <Route path = '/patients/home' element = {<ProtectedRoute><PHome /></ProtectedRoute>} />
      <Route path = '/doctor/home' element = {<ProtectedRoute><DHome/></ProtectedRoute>} />
      <Route path = '/patients/delete' element = {<ProtectedRoute><DeletePatient/></ProtectedRoute>} />
      <Route path = '/patients/profile' element = {<ProtectedRoute><PProfile/></ProtectedRoute>} />
      <Route path = '/doctor/profile' element = {<ProtectedRoute><DProfile/></ProtectedRoute>} />
      <Route path = "/doctor/patientInfo" element={<ProtectedRoute><DPinfo /></ProtectedRoute>} />
      <Route path = '/doctor/patientInfo/changeGreenMeds' element = {<ProtectedRoute><ChangeGreenMeds/></ProtectedRoute>} />
      <Route path = '/doctor/patientInfo/changeYellowMeds' element = {<ProtectedRoute><ChangeYellowMeds/></ProtectedRoute>} />
      <Route path = '/doctor/patientInfo/changeRedMeds' element = {<ProtectedRoute><ChangeRedMeds/></ProtectedRoute>} />
      <Route path = '/patients/profile' element = {<ProtectedRoute><EditPatient/></ProtectedRoute>} />
      <Route path = '/doctor/edit' element = {<ProtectedRoute><EditDoctor/></ProtectedRoute>} />
      <Route path = '/patients/green' element = {<ProtectedRoute><GreenZone/></ProtectedRoute>} />
      <Route path = '/patients/yellow' element = {<ProtectedRoute><YellowZone/></ProtectedRoute>} />
      <Route path = '/patients/red' element = {<ProtectedRoute><RedZone/></ProtectedRoute>} />
      <Route path = '/patients/animations' element = {<ProtectedRoute><Animations/></ProtectedRoute>} />
      <Route path = '/patients/surveys' element = {<ProtectedRoute><Surveys/></ProtectedRoute>} />
      <Route path = '/patients/actionSheet' element = {<ProtectedRoute><ActionSheet/></ProtectedRoute>} />
      <Route path = '/doctor/message' element = {<ProtectedRoute><MessagePatient/></ProtectedRoute>} />
      <Route path = '/resources' element = {<Resources/>} />
    </Routes>
    </UserContextProvider>
  );
};
export default App