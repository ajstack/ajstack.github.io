import React, {Component} from "react";
import Wrapper from "../../components/Wrapper";
import ContactTitle from "../../components/contactTitle";
import ContactInfoCard from "../../components/contactInfoCard";
import contactInfo from "../../assets/contact.json"
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
        <div className="credit-info">LinkedIn Icon made by
          <a href="https://www.freepik.com/" title="Freepik">Freepik</a> and Github icon made by
          <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from
          <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> and is licensed by
          <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a>
        </div>
      </Wrapper>
    </div>
    )
  }
}

export default Contact;

// I want to set up cards that pull from a json like with projects