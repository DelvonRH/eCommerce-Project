import {Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import AboutPage from "./Components/AboutPage/AboutPage";
import ProductPage from "./Components/ProductPage/ProductPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import SignUpPage from "./Components/SignUpPage/SignUpPage";
import AdminPage from "./Components/AdminPage/AdminPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path = "/login" element={<LoginPage/>}/>
        <Route path ="/signup" element={<SignUpPage/>}/>
        <Route path = "/about" element={<AboutPage/>}/>
        <Route path = "/products" element={<ProductPage/>}/>
        <Route exact path ="/admin" element={<AdminPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
