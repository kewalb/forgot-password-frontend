import "./App.css";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
      <Route path="/signUp">
        <Signup />
      </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
