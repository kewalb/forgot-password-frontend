import "./App.css";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ResetPassword from "./components/ResetPassword";
import ResetPasswordForm from "./components/ResetPasswordForm";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
      <Route path="/signUp">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/reset-password">
        <ResetPassword />
      </Route>
      <Route path="/reset-password-form/:token">
        <ResetPasswordForm />
      </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
