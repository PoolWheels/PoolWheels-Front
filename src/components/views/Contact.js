import React from "react";
import "../../styles/Contact.scss";
import logo from "../../images/logo.png";
import gmail from "../../images/gmail.png";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/About");
  };

  return (
    <div>
      <div id="blockLogo1E">
        <img id="logo1E" src={logo} alt="" />
      </div>
      <div class="blockMain1E">
        <div class="blockUbi1E">
          <div class="blockSub1E">
            <label class="subtitle1E">Ubicación</label>
          </div>
          <iframe
            id="map1E"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.9260020351694!2d-74.04479988523742!3d4.7827152965266535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85e32ae0ca4b%3A0x5edd4c74e8f7220c!2sEscuela%20Colombiana%20de%20Ingenier%C3%ADa%20Julio%20Garavito!5e0!3m2!1ses-419!2sco!4v1635034869984!5m2!1ses-419!2sco"
          ></iframe>
          <div class="blockAddress1E">
            <label class="label1E">
              AK 45 (Autonorte) #205-59, Bogotá, Cundinamarca
            </label>
          </div>
        </div>
        <div class="blockEmail1E">
          <div class="blockSub1E">
            <label class="subtitle1E">Email</label>
          </div>
          <div class="blockLogContact1E">
            <img
              class="logoContact1E"
              src={gmail}
              alt="Logo de Google Gmail."
            />
          </div>
          <div class="blockInfLbl1E">
            <label class="label1E">uniwheelscompany@gmail.com</label>
          </div>
        </div>
      </div>
      <footer id="blockInfo1E">
        <p onClick={redirect} class="optFooter1E">
          Nosotros
        </p>
      </footer>
    </div>
  );
}
