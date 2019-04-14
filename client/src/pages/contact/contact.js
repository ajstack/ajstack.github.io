import React, { Component } from "react";
import "./contact.css";
import Wrapper from "../../components/Wrapper";
import ContactTitle from "../../components/contactTitle";
import ContactInfoCard from "../../components/contactInfoCard";
import contactInfo from "../../assets/contact.json";
import CreditInfo from "../../components/creditInfo";
import Email from "../../components/email";


class Contact extends Component {
  state = {
    contactInfo
  };

  render() {
    return (
      <div className="contact">
        <div className="main-page">
          <Wrapper>
            <ContactTitle>Contact Me</ContactTitle>
            <Email>a.j.stack@sbcglobal.net</Email>
            {this.state.contactInfo.map(contact => (
              <ContactInfoCard
                id={contact.id}
                key={contact.id}
                image={contact.image}
                website={contact.website}
                url={contact.url}
              />
            ))}
          </Wrapper>
        </div>
        <CreditInfo />
      </div>
    )
  }
}

export default Contact;
