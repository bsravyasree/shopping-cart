import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home.component";
import Cart from "./components/cart/cart.component";
import NavHeader from './components/nav-header/nav-header.component';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavHeader />
        <Routes>
          <Route path="/" Component={Home}>
          </Route>
          <Route path="/home" Component={Home}>
          </Route>
          <Route path="/cart" Component={Cart}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;



// export default App


