import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./components/Loader";
import { linkNamePageLogin } from "./routes";
import store from "./store";

// Containers
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));

// Pages
const Page404 = React.lazy(() => import("./views/Page404"));
const PageLogin = React.lazy(() => import("./views/PageLogin"));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename="/dashboard">
          <React.Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
              <Route
                exact
                path="/login"
                name={linkNamePageLogin}
                render={(props) => <PageLogin {...props} />}
              />
              <Route
                exact
                path="/"
                name={linkNamePageLogin}
                render={(props) => <PageLogin {...props} />}
              />
            </Switch>
          </React.Suspense>
        </Router>
      </Provider>
    );
  }
}

export default App;
