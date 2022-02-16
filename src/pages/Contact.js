import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";
import ButtonSlide from "../components/ButtonSlide";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigation />
        <Logo />
        {/* contact from */}
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
              <h4>téléphone</h4>

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
        </div>
        <ButtonSlide left={"/project4"} />
      </div>
    </main>
  );
};

export default Contact;
