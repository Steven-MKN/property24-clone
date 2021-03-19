import { useState } from "react";
import axios from "axios";
import { api } from "../config";

const ContactAgentForm = (props) => {
  const messagePlaceholder = `Please send me more information about web ref ${props.id} in ${props.surburb}`;

  const [contactAgentForm, setContactAgentForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    messagePlaceholder,
  });

  const handleChange = (e) => {
    setContactAgentForm({
      ...contactAgentForm,
      [e.target.id]: e.target.value,
    });
  };

  const handleContactAgentSubmit = async (e) => {
    e.preventDefault();

    const url = api + "/property/contact";
    const data = {
      ...contactAgentForm,
      email: contactAgentForm.email
        ? contactAgentForm.email
        : contactAgentForm.messagePlaceholder,
      propertyId: props.id,
      agentId: props.agentId,
    };

    try {
      const response = await axios.post(url, data);
      console.log(response);

      if (response.status === 200) {
        alert("Message sent to agent");
        setContactAgentForm({
          name: "",
          email: "",
          number: "",
          message: "",
          messagePlaceholder,
        });
      } else {
        alert(
          "An error occured while trying to send message, please try again later"
        );
      }
    } catch (error) {
      console.log(error);
      alert(
        "An error occured while trying to send message, please try again later"
      );
    }
  };

  return (
    <div className="row">
      <div className="col s12 m8 property-card">
        <form onSubmit={handleContactAgentSubmit}>
          <label>
            <h3>Contact Agent</h3>
          </label>

          <div className="row">
            <div className="input-field col s12">
              <input
                id="name"
                type="text"
                value={contactAgentForm.name}
                onChange={handleChange}
              />
              <label htmlFor="name">Your Name</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                value={contactAgentForm.email}
                onChange={handleChange}
              />
              <label htmlFor="email">Your Email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                id="number"
                type="text"
                maxLength="12"
                value={contactAgentForm.number}
                onChange={handleChange}
              />
              <label htmlFor="number">Your Mobile Number</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="message"
                className="materialize-textarea contact-agent-textarea"
                value={contactAgentForm.message}
                onChange={handleChange}
                placeholder={contactAgentForm.messagePlaceholder}
              ></textarea>
            </div>
          </div>

          <input
            type="submit"
            value="Send Message"
            className="waves-effect waves-light btn"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactAgentForm;
