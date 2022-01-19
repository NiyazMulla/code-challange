import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Loader from "./components/Loader";
import store from "./store";

import { linkPage404, linkNamePage404, linkNamePageHome, linkPageHome } from "./routes";
// Containers

// Pages
const Page404 = React.lazy(() => import("./views/Page404"));
const PageHome = React.lazy(() => import("./views/PageHome"));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Suspense fallback={<Loader />}>
            <Header />
            <Switch>
              <Route
                exact
                path={linkPage404}
                name={linkNamePage404}
                render={(props) => <Page404 {...props} />}
              />
              <Route
                exact
                path={linkPageHome}
                name={linkNamePageHome}
                render={(props) => <PageHome {...props} />}
              />
              {/* <Redirect from="/" to={linkPage404} /> */}
            </Switch>
            {/* <Footer /> */}
          </React.Suspense>
        </Router>
      </Provider>
    );
  }
}

export default App;
