import "../../styles/base.scss";
import * as React from "react";
import card1img from "../../images/card1.png";
import card2img from "../../images/card2.png";
import card3 from "../../images/card3.png";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import "../../styles/LadingPage.scss";

export default function LadingPage() {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/Contact");
  };

  return (
    <div>
      <div id="blockLogo1D">
        <img id="logo1D" src={logo} alt="" />
      </div>
      <div class="blockMain1D">
        <div class="blockMis1D">
          <div class="blockFirtImg1D">
            <div class="blockSub1D">
              <label class="subtitle1D">Generar Ganancias</label>
            </div>
            <div class="blockLogAbt1D">
              <img class="logoAbout1D" src={card1img} alt="" />
            </div>
          </div>
          <div class="blockTxtAbt1D">
            <label class="label1D">
              Genera ganancias por viajes realizados. Organiza tus horarios y
              dispone de tu tiempo.
            </label>
          </div>
        </div>
        <div class="blockVis1D">
          <div class="blockFirtImg1D">
            <div class="blockSub1D">
              <label class="subtitle1D">Seguridad</label>
            </div>
            <div class="blockLogAbt1D">
              <img class="logoAbout1D" src={card2img} alt="" />
            </div>
          </div>
          <div class="blockTxtAbt1D">
            <label class="label1D">
              Transporte colectivo en un entorno común entre estudiantes
              universitarios y empleados.
            </label>
          </div>
        </div>
        <div class="blockMem1D">
          <div class="blockFirtImg1D">
            <div class="blockSub1D">
              <label class="subtitle1D">Opción de viaje</label>
            </div>
            <div class="blockLogAbt1D">
              <img class="logoAbout1D" src={card3} alt="" />
            </div>
          </div>
          <div class="blockTxtAbt1D">
            <label class="label1D">Pide un viaje cuando lo necesites.</label>
          </div>
        </div>
      </div>
      <footer id="blockInfo1D">
        <p onClick={redirect} class="optFooter1D">
          Contacto
        </p>
      </footer>
    </div>
  );
}
