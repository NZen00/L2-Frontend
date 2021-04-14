import "./App.scss";
import { HomePage } from "./containers/HomePage";
import {Customer} from './components/users/customer'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CustomerAccessPage } from "./containers/customerAccessPage";
import Checkout from "./views/Checkout/Checkout";
import configureStore from "./store";
import {Provider} from "react-redux";
import ThankYou from "./views/ThankYou/ThankYou";

function App() {
  const store = configureStore();

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route
                path="/customer/access/:action"
                exact
                component={CustomerAccessPage}
            />
            <Route path="/customer/page" exact component={Customer} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/thankyou" exact component={ThankYou} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
