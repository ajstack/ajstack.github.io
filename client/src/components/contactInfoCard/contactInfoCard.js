import React from "react";
import "./contactInfoCard.css";

const ContactInfoCard = props => (
  <div className="contact-card">
    <div className="contact-img-container">
      <img alt={props.website} src={props.image} />
    </div>
    <div className="contact-content">
      <a href={props.url}> <h3 className="contact-website">{props.website}</h3></a>
    </div>
  </div>
)
export default ContactInfoCard;