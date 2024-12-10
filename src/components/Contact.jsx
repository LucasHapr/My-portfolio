import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { send, sendHover } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // sign up on emailjs.com (select the gmail service and connect your account).
    //click on create a new template then click on save.
    emailjs
      .send(
        "serviceID", // paste your ServiceID here (you'll get one when your service is created).
        "templateID", // paste your TemplateID here (you'll find it under email templates).
        {
          from_name: form.name,
          to_name: "YourName", // put your name here.
          from_email: form.email,
          to_email: "youremail@gmail.com", //put your email here.
          message: form.message,
        },
        "yourpublickey" //paste your Public Key here. You'll get it in your profile section.
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.5] bg-jet p-8 rounded-2xl mx-auto"
      >
        {/* <p className={styles.sectionSubText}>Get in touch</p> */}
        <h3 className={styles.sectionHeadTextLight}>Entre em Contato.</h3>

        <div className="w-100 mt-10 flex flex-col gap-6 font-poppins text-timberWolf">
          <div className="flex flex-col">
            <span className="text-timberWolf font-medium mb-2">E-mail:</span>
            <span className="text-taupe font-light">lucashenriquerodrigues055@gmail.com</span>
          </div>

          <div className="flex flex-col">
            <span className="text-timberWolf font-medium mb-2">Telefone:</span>
            <span className="text-taupe font-light">+55 (16) 98141-6304</span>
          </div>

          <div className="flex flex-col">
            <span className="text-timberWolf font-medium mb-2">LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/lucas-rodrigues-b72567259/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-battleGray hover:underline"
            >
              Lucas Rodrigues
            </a>
          </div>

          <div className="flex flex-col">
            <span className="text-timberWolf font-medium mb-2">GitHub:</span>
            <a
              href="https://github.com/LucasHapr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-battleGray hover:underline"
            >
              LucasHapr
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
