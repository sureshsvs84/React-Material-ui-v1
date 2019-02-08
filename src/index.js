import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "assets/css/baseStyle.css";

import indexRoutes from "routes/index.jsx";
const middleware = [thunk];
const hist = createBrowserHistory();
const rootReducer = combineReducers({
  function() {
    return {};
  }
});
const store = createStore(rootReducer, applyMiddleware(...middleware));
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return (
              <Route path={prop.path} component={prop.component} key={key} />
            );
          })}
        </Switch>
      </Router>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
