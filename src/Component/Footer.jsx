import React from 'react'
import rn from "../Assests/without bg1.jpg";
import {AiOutlineArrowUp} from "react-icons/ai";

const Footer = () => {
  return (
    <div> 
        <footer>
            <div>
                <img src={rn} alt="Raja." />
                <h2> RAJA.</h2>
                <p> We cannot become what we need by remaining what we are. </p>
            </div>
            <a href="#home">
                <AiOutlineArrowUp />
            </a>
        </footer>
    </div>
  )
}

export default Footer