import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import Resume from "../Assets/Projects/Vimaladhithan_Resume.pdf";
import emailjs from "emailjs-com";

const Contact = ({ contact }) => {
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_k343j2j",
        "template_dqyjl6k",
        e.target,
        "cR0qTjIWh2tZXVLGL"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          if (formRef.current) {
            formRef.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );
  };
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="flex-1 border-b border-neutral-900 pb-20">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-3xl"
        >
          Contact
        </motion.h1>
        <div className="tracking-tighter">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            {contact.address}
          </motion.p>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex mb-3"
          >
            <FaPhoneSquareAlt className="mt-1 mr-2" />
            <p>{contact.phoneNo}</p>
          </motion.div>
          <motion.div 
          
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex">
            <FaPaperPlane className="mr-2 mt-2 size-3" />
            <a href={`mailto:${contact.email}`} className="border-b mb-4">
              {contact.email}
            </a>
          </motion.div>
        </div>
        <motion.div  whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}>
          <button className="ml-4 px-2 py-1 text-sm text-purple-900 bg-neutral-900 rounded">
            <a href={Resume} download>
              Download Resume
            </a>
          </button>
        </motion.div>
      </div>
      <div className="flex-1 border-b border-neutral-900 pb-20">
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0,y: -100}}
        transition={{duration:1}}
        className="my-10 text-3xl">Get In Touch</motion.h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col justify-between space-y-4"
        >
          <motion.input 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
            type="text"
            name="from_name"
            placeholder="Enter your name"
            className="rounded custom-placeholder max-w-sm px-2 py-1 w-full border text-black"
            required
          />

          <motion.input
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
            type="text"
            name="from_email"
            placeholder="Enter your email"
            className="rounded custom-placeholder max-w-sm px-2 py-1 w-full border text-black border-gray-300"
            required
          />
          <motion.input
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
            type="number"
            name="phone"
            placeholder="Enter your phone no"
            className="rounded custom-placeholder max-w-sm px-2 py-1 w-full border text-black border-gray-300"
            required
          />
          <motion.textarea
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
            name="message"
            className="rounded custom-placeholder max-w-sm w-full px-2 py-1 text-black"
            placeholder="Enter your message" required
          />
          <motion.button
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
            className="flex max-w-sm justify-center mt-4 px-2 py-1 text-sm text-purple-900 bg-neutral-900 rounded"
            type="submit"
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
