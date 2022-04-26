
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes,Route } from "react-router-dom";
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Login from './components/Login/Login';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Registration from './components/Registration/Registration';
import CheckOut from './components/CheckOut/CheckOut';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import {Toaster} from "react-hot-toast";
import RequireAuth from '../src/components/RequireAuth/RequireAuth';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Toaster></Toaster>
      
      <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="home" element={<Home></Home>} />
          <Route path="services" element={<Services></Services>}/>
          <Route path="blog" element={<Blog> </Blog>}/>
          <Route path="aboutMe" element={<About></About>} />
          <Route path="registration" element={<Registration> </Registration> } />
          <Route path="login" element={<Login></Login>} />
          <Route path="checkOut" element={<CheckOut></CheckOut>} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
