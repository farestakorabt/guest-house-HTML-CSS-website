import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";
import ButtonSlide from "../components/ButtonSlide";
import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";

const Contact = () => {
  const variants = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };

  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };

  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        exit="out"
        animate="in"
        initial="out"
        variants={variants}
        transition={transition}
      >
        <Navigation />
        <Logo />
        <ContactForm />

        <div className="contact-infos">
          <div className="adresse">
            <div className="content">
              <h4>Adress</h4>
              <p>12 rue de Baghee</p>
              <p>48000 saint-Alioush</p>
            </div>
          </div>

          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="0734585444" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Numéro copié !")}
                >
                  0734585444
                </p>
              </CopyToClipboard>
            </div>
          </div>

          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="farestakorabt@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Email copié !")}
                >
                  farestakorabt@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>

          <SocialNetwork />
          <div className="credits">
            <p>farestakorabt - 2022</p>
          </div>
        </div>
        <ButtonSlide left={"/project4"} />
      </motion.div>
    </main>
  );
};

export default Contact;
