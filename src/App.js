import Pins from "./components/contacts/Pins";
import Navbar from "./components/elements/Navbar";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddPin from "./components/contacts/AddPin";
import EditPins from "./components/contacts/EditPins";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/savedpins" component={Pins} />
                <Route exact path="/" component={AddPin} />
                <Route exact path="/edit/:id" component={EditPins} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
