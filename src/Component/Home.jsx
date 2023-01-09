// import React, { useRef } from 'react';
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs';
import image from '../Assests/raja.svg';

const Home = () => {

    // const clientCount = useRef(null);
    // const projectsCount = useRef(null);

    // const animationClientsCount = () =>{
    //     animate(0,100, {
    //         duration: 1, 
    //         onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    //     });
    // }

    // const animationProjectsCount = () =>{
    //     animate(0,500, {
    //         duration: 1, 
    //         onUpdate: (v) => (projectsCount.current.textContent = v.toFixed()),
    //     });
    // }

    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },

            whileInView: {
                x: 0,
                opacity: 1,
            },
        },

        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },

            whileInView: {
                y: 0,
                opacity: 1,
            },
        }
    }
    return (
        <div id='home'>
            <section>

                <div>
                    <motion.h1 {...animations.h1}>
                        Hi I am <br /> Raja.
                    </motion.h1>

                    <Typewriter options={{
                        strings: ["A Developer", "A Designer", "A Creator"],
                        autoStart: true,
                        loop: true,
                        wrapperClassName: "typewriterpara",
                        cursor: ""
                    }} />

                    <div>
                        <a href="mailto:official.rn88106@gmail.com"> HIRE ME</a>
                        <a href="#work"> PROJECTS <BsArrowUpRight /> </a>
                    </div>

                    {/* <article>
                        <p>
                        +
                        {
                            ratio < 2 && <motion.span whileInView={animationClientsCount} ref={clientCount}> </motion.span>
                        }
                        </p>
                        <span>Clients Worldwide</span>
                    </article> */}

                    <aside>

                        {/* <article>
                            <p>
                            +
                            {
                                ratio < 2 && <motion.span whileInView={animationProjectsCount} ref={projectsCount}> </motion.span>
                            }
                            </p>
                            <span>Projects Done. </span>
                        </article> */}

                        <article data-special>
                            <h2> Contact </h2>
                            <span> official.rn88106@gmail.com </span>
                        </article>

                    </aside>

                </div>

            </section>

            <section>

                <img src={image} alt="No Priview" />

            </section>

            <BsChevronDown />

        </div>
    )
}

export default Home