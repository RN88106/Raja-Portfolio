import React, { useState } from 'react';
import cont from "../Assests/contact.jpg";
import { toast } from 'react-hot-toast';
import { motion } from "framer-motion";
import { addDoc, collection } from 'firebase/firestore';
import {db} from "../Component/firebase";

const Contact = () => {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [disablebtn, setdisablebtn] = useState(false);

  const submitHandler = async (e) => {

    e.preventDefault();
    setdisablebtn(true);
    

    try {

      await addDoc(collection(db, "contacts"), {name,email,message});
      setname("")
      setemail("")
      setmessage("")
      toast.success("Message Sent")
      setdisablebtn(false);
      
    } catch (error) {

      toast.error("Error")
      console.log("error")
      setdisablebtn(false);
      
    }

   


  }

  const animations = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      }
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

      transition: {
        delay: 0.5,
      },
    },
  };


  return (
    <div id='contact'>
      <section>
        <motion.form onSubmit={submitHandler} {...animations.form}>
          <h2> CONTACT </h2>
          <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder='Your Name' required></input>
          <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder='Your Email' required></input>
          <input type="text" value={message} onChange={(e) => setmessage(e.target.value)} placeholder='Your Message' required></input>

          <motion.button disabled={disablebtn} className={disablebtn ? "disableBtn" : ""} type="submit" {...animations.button}> Submit </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={cont} alt="No Preview" />
      </aside>
    </div>
  )
}

export default Contact