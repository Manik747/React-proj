import React, { Fragment, Component } from "react";
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { LastLocationProvider } from 'react-router-last-location';
import "./App.css";
import Nav from "../components/nav/Nav";
import NotFound from "../components/_404/NotFound";
import About from "../components/pages/About";
// import Authentication from "../components/forms/Authentication";
import CreateEventForm from "../components/forms/events/EventForm";
import Authentication from "../components/auth/Authentication";
import LandingPg from "../components/pages/LandingPage/LandingPg";
import EOIDetails from "../components/dashboard/EOIDetail"
import AdminDashboard from "../components/dashboard/AdminDashboard"
import { getSessionAuthToken} from "../redux/actions/authenticateUserAction";

class App extends Component {
  componentDidMount() {
    this.props.getSessionAuthToken("AuthToken");
  }
render() {
    const { loggedIn, userRole } = this.props;
    console.log('loggedIn, userRole', loggedIn, userRole);

    return (
      <div className="App">
        <Router>
          <div>
            <LastLocationProvider>
              <Fragment>
                <Nav />
                <Switch>
                  <Route exact path="/" component={LandingPg} />
                  <Route path="/details" component={EOIDetails} />
                  {loggedIn && userRole === "admin" && (
                    <Route path="/dashboard/" component={AdminDashboard} />
                  )}
                  <Route path="/about" component={About} />
                  <Route path="/create" component={CreateEventForm} />
                  <Route
                    path="/users/register"
                    component={Authentication}
                  />
                  <Route path="/users/login" component={Authentication} />
                  <Route path="/users/logout" component={Authentication} />
                  <Route component={NotFound} />
                </Switch>
              </Fragment>
            </LastLocationProvider>
          </div>
        </Router>
      </div>
    );
  };
}
const mapPropsToTypes = state => ({

  userRole: state.auth.authenticatedUserRole,
  loggedIn: state.auth.loggedIn,
});

export default connect(
  mapPropsToTypes,
  { getSessionAuthToken}
)(App);
