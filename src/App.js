import React from "react";
import {
  Switch,
  Redirect,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Users from "./users/pages/Users";
import NewPage from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
function App() {
  return (
    // <Router> What to router
    //   <Route path="/" exact> Where to navigate
    //     <Users /> Content of routed files
    //   </Route>
    // </Router>
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
            <NewPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
