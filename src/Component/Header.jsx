import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"

const Header = ({menuopen, setmenuopen}) => {
  return (
    <>
    <nav>
      <NavContent setmenuopen={setmenuopen}/>
     
    </nav>

    <button className='navBtn' onClick={() => setmenuopen(!menuopen)}>
        <AiOutlineMenu />
      </button>

    </>
  )
}


export const NavContent = ({setmenuopen}) =>(
  <>

  <h2> RAJA. </h2>

  <div>
    <a onClick={() => setmenuopen(false)} href="#home"> Home </a>
    <a onClick={() => setmenuopen(false)} href="#work"> Work </a>
    <a onClick={() => setmenuopen(false)} href="#timeline"> Timeline </a>
    <a onClick={() => setmenuopen(false)} href="#services"> Services </a>
    <a onClick={() => setmenuopen(false)} href="#contact"> Contact </a>
  </div>

  <a href="mailto:official.rn88106@gmail.com">
    <button> Email </button>
  </a>


  
  </>
)

export default Header