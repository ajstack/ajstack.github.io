import React from "react";
import "./contactInfoCard.css";

const ContactInfoCard = props => (
  <div className="contact-card">
      <a href={props.url}> <img alt={props.website} src={props.image} /> </a>
  </div>
)
export default ContactInfoCard;