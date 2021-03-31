import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Login from "./Pages/Login";
import AuthContextProvider from "./context/AuthContext";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <div className="app">
      <AuthContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/product" component={Product} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
