import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import CreateNote from './pages/CreateNote';
import UserHome from './pages/UserHome';
import Notes from './pages/Notes';

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/notes/create" element={<CreateNote />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </BrowserRouter>

  );
}
