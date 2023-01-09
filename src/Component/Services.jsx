import React from 'react'
import {motion} from "framer-motion";
import {AiFillIeCircle, AiFillStar} from "react-icons/ai"

const Services = () => {

    const animations = {

        whileInView:{
            x:0,
            y:0,
            opacity: 1,

        },
        one:{
            opacity: 0,
            x:"-100%",
        },
        twoAndThree:{
            opacity: 0,
            y:"-100%",
        },
        four:{
            opacity: 0,
            x:"100%",
        }


    }
  return (
    <div id='services'>
        <h2> SERVICES </h2>
        <section>
            <motion.div className='servicesbox1'whileInView={animations.whileInView} initial={animations.one}>
                <h3>1.5+</h3>
                <p> Years Experiences </p>
            </motion.div>
            <motion.div className='servicesbox2'whileInView={animations.whileInView} initial={animations.twoAndThree}>
                <AiFillIeCircle />
                <span>Web Development </span>
            </motion.div>
            <motion.div className='servicesbox3'whileInView={animations.whileInView} initial={animations.twoAndThree} transition={{
                delay: 0.2,
            }}>
                <AiFillStar />
                <span> Frontend Development </span>
            </motion.div>
            <motion.div className='servicesbox4'whileInView={animations.whileInView} initial={animations.four}>
                <AiFillStar />
                <span> Graphy,Kajabi and ClickFunnel Development </span>
            </motion.div>
           
        </section>
    </div>
  )
}

export default Services