import React from "react";
import ContactTitle from "../../components/contactTitle";
import ContactInfoCard from "../../components/contactInfoCard";
import "./contact.css";

const Contact = () => (
    <div className="contact">
        <ContactTitle>Contact!</ContactTitle>
        <ContactInfoCard />
        <div className="credit-info">LinkedIn Icon made by 
            <a href="https://www.freepik.com/" title="Freepik">Freepik</a> and Github icon made by
            <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from 
            <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> and is licensed by 
            <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a>
        </div>
    </div>

);

export default Contact;

// I want to set up cards that pull from a json like with projects