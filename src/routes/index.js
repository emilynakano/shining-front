import { Routes as Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Notes from '../pages/Notes';
import Today from '../pages/Today';
import UserHome from '../pages/UserHome';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/home" element={<UserHome />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/notes/today" element={<Today />} />
    </Switch>
  );
}
