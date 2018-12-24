import React, {Component} from "react";
import Wrapper from "../../components/Wrapper";
import ContactTitle from "../../components/contactTitle";
import ContactInfoCard from "../../components/contactInfoCard";
import contactInfo from "../../assets/contact.json";
import CreditInfo from "../../components/creditInfo";
import "./contact.css";

class Contact extends Component {
  state = {
    contactInfo
  };
  
  render() {
    return (
      <div className="contact">
      <Wrapper>
        <ContactTitle>Contact Me</ContactTitle>
        {this.state.contactInfo.map(contact => (
          <ContactInfoCard 
            id={contact.id}
            key={contact.key}
            image={contact.image}
            website={contact.website}
            url={contact.url}
          />
        ))}
        <CreditInfo />
      </Wrapper>
    </div>
    )
  }
}

export default Contact;
