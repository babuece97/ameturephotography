
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes,Route } from "react-router-dom";
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Login from './components/Login/Login';
import Blog from './components/Blog/Blog';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
          <Route path="/" element={<Home></Home>}>
          </Route>
          <Route path="home" element={<Home></Home>} />
          <Route path="services" element={<Services></Services>}>
          <Route path=":blog" element={<Blog> </Blog>} />
          <Route path="about me" element={<p> About mee</p>} />
          <Route path="registration" element={<p> Registration </p> } />
          <Route path="login" element={<Login></Login>} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
