import React from "react";
import "../styles/footer.css";
import Facebook from "./icons/Facebook";
import Gmail from "./icons/Gmail";
import Logo from "./icons/Logo";
import Whatsapp from "./icons/Whatsapp";

export default function Footer() {
  return (
    <div className="footer">
      <div className="containerFooter">
        <div className="footerLogo">
          <Logo />
        </div>

        <div className="footerBottom">
          <div className="leftSideFooter">
            <div className="leftButton">
              <Gmail />
              <Facebook />
              <Whatsapp />
            </div>
          </div>
          <div className="rightSideFooter">
            <p>
              © 2023 Tuulai. Built using AQUA and Tuulai Theme. Terms and
              Conditions{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
