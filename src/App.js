
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes,Route } from "react-router-dom";
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Login from './components/Login/Login';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Registration from './components/Registration/Registration';
import Banner from './components/Banner/Banner';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="home" element={<Home></Home>} />
          <Route path="services" element={<Services></Services>}/>
          <Route path="blog" element={<Blog> </Blog>}/>
          <Route path="about me" element={<About></About>} />
          <Route path="registration" element={<Registration> </Registration> } />
          <Route path="login" element={<Login></Login>} />
        </Routes>
    </div>
  );
}

export default App;
