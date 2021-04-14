import React, { useState } from "react";
import styles from "../styles/Contacts.module.css";

export default function ContactForm() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const nameInput = (values) => {
    if (values.target.value.length > 25) {
      setText("Name is too long");
    } else {
      setText("");
    }
  };

  const emailInput = (email) => {
    console.log(email.target.value);
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email.target.value)) {
      setEmail("Invalid email adress");
      return re.test(email);
    } else {
      setEmail("");
    }
  };

  const messageInput = (message) => {
    if (message.target.value.length > 200) {
      setMessage("Message is too long");
    } else {
      setMessage("");
    }
  };
  return (
    <div className={styles.emailCell}>
      <div className={styles.emailForm}>
        <form name='contact' method='POST' data-netlify='true'>
          <input type='hidden' name='form-name' value='contact' />
          <div>
            <label htmlFor='name' className='sr-only'>
              Vardas
            </label>
            <p>{text}</p>
            <input
              onChange={nameInput}
              type='text'
              name='name'
              className={styles.name}
              placeholder='Vardas'
            />
          </div>
          <div>
            <label htmlFor='email' className='sr-only'>
              Email
            </label>
            <p>{email}</p>
            <input
              onChange={emailInput}
              name='email'
              type='text'
              className={styles.name}
              placeholder='Email'
            />
          </div>
          <div>
            <label htmlFor='message' className='sr-only'>
              Message
            </label>
            <p>{message}</p>
            <textarea
              onChange={messageInput}
              name='message'
              rows='4'
              className={styles.subject}
              placeholder='Message'
            ></textarea>
          </div>
          <div>
            <button type='submit' className={styles.button}>
              Siusti
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
