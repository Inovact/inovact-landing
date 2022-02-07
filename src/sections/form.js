import SectionHeader from "components/section-header";
import React from "react";

const Form = () => {
  return (
    <div className="form">
      <div class="form-wrapper">
        <SectionHeader title="To establish ISCP in your University/college, please fill this form and we will get back to you ASAP" />
        <form action="" method="POST">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input
              type="text"
              name="Name"
              id="name"
              placeholder="First and Last"
              required
              minlength="3"
              maxlength="25"
            />
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="email@domain.tld"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">University</label>
            <input
              type="text"
              name="Email"
              id="email"
              placeholder="Please enter your university name"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">University Website</label>
            <input
              type="text"
              name="website"
              id="website"
              placeholder="pes.edu"
              required
            />
          </div>
          {/* <div class="form-group">
            <label for="message">Message</label>
            <textarea
              name="Message"
              id="message"
              rows="5"
              placeholder="Type your message here...."
            ></textarea>
          </div> */}
          <div class="form-group">
            <button type="submit" class="submit">
              <i class="far fa-paper-plane"></i>Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
