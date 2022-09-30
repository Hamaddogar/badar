import Home  from "./Home/Home"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
 import About from "./Home/About/about";
 import Contact from "./Home/Contact/Contact";
 import Header from "./Home/Header/Header";
 import Footer from "./Home/Footer/footer";
 const   App =()=>{
  return(
    <BrowserRouter>
      <Header/>
    <Routes>
       <Route path ="/" element={<Home/>}/>
       <Route path ="/About" element={<About/>}/>
       <Route path ="/Contact" element={<Contact/>}/>

      
      </Routes>   
      <Footer/>
    </BrowserRouter>
  )
 }
  export default App