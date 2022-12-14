import { Routes as Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Notes from '../pages/Notes';
import Today from '../pages/Today';
import UserHome from '../pages/UserHome';

import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import Plan from '../pages/Plan';
import Account from '../pages/Account';

export default function Routes() {
  return (
    <Switch>
      <Route
        path="/"
        element={(
          <PublicRouter>
            <Home />
          </PublicRouter>
        )}
      />
      <Route
        path="/sign-up"
        element={(
          <PublicRouter>
            <SignUp />
          </PublicRouter>
        )}
      />
      <Route
        path="/sign-in"
        element={(
          <PublicRouter>
            <SignIn />
          </PublicRouter>
        )}
      />
      <Route
        path="/plan"
        element={(
          <Plan />
        )}
      />
      <Route
        path="/home"
        element={(
          <PrivateRouter>
            <UserHome />
          </PrivateRouter>
        )}
      />
      <Route
        path="/notes"
        element={(
          <PrivateRouter>
            <Notes />
          </PrivateRouter>
        )}
      />
      <Route
        path="/notes/today"
        element={(
          <PrivateRouter>
            <Today />
          </PrivateRouter>
        )}
      />
      <Route
        path="/account"
        element={(
          <PrivateRouter>
            <Account />
          </PrivateRouter>
        )}
      />
    </Switch>
  );
}
