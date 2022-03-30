import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pay from "./components/Pay";
import Success from "./components/Success";

function App() {
  return (
    <Router>
      <div>
        <header>
          <Switch>
            <Route exact path="/">
              <Home />  
            </Route>
            <Route path="/login">
              <Login />  
            </Route>
            <Route path="/register">
              <Register />  
            </Route>
            <Route path="/product">
              <Product />  
            </Route>
            <Route path="/productList">
              <ProductList />  
            </Route>
            <Route path="/cart">
              <Cart />  
            </Route>
            <Route path="/pay">
              <Pay/> 
            </Route>
            <Route path="/success">
              <Success/> 
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;