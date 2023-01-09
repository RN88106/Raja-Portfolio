import Header from './Component/Header';
import Home from './Component/Home';
import Work from './Component/Work';
import Timeline from "./Component/Timeline";
import Services  from "./Component/Services";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer.jsx"
import { Toaster } from 'react-hot-toast';
import { useState, useEffect} from 'react';
import HeaderPhone from './Component/HeaderPhone';

function App() {

  const [menuopen, setmenuopen] = useState(false)
  const [ratio, setratio] = useState(window.innerWidth / window.innerHeight)

useEffect(() => {

  const resizeRatio  = () =>{
    setratio(window.innerWidth / window.innerHeight)
  }

  window.addEventListener("resize", resizeRatio)
  

  return () => {
    window.removeEventListener("resize", resizeRatio)
  }
}, [ratio])



  return ratio < 2 ? (
    <>
    <HeaderPhone menuopen={menuopen} setmenuopen={setmenuopen} />
    <Header menuopen={menuopen} setmenuopen={setmenuopen} />
    <Home />
    <Work />
    <Timeline />
    <Services />
    <Contact />
    <Footer />
    <Toaster />
    
    </>
  ) : <em id='customMessage'> Please Change the ratio to View! </em>
}

export default App;
