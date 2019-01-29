import React from "react";
import PictureOfMe from "../../images/Alicia_Portfolio.jpg";
import "./pictureCard.css";

const PictureCard = () => (
  <div className="picture-card">
    <img src={PictureOfMe} alt="Alicia Stack" />
  </div>
);

export default PictureCard;