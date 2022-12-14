import { React } from "react";

const Modal = ({ open, onClose, driver }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalRight">
          <p className="closeBtn" onClick={onClose}>
            x
          </p>
          <div className="content">
            <p
              style={{
                fontFamily: "monospace",
                color: "#07063D",
                fontSize: "20px",
              }}
            >
              CONDUCTOR
            </p>
            <p
              style={{
                fontFamily: "Helvetica",
                color: "#07063D",
                fontSize: "15px",
              }}
            >
              NOMBRE: {driver.name} {driver.lastName}
            </p>
            <p>📲 TEL: {driver.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
