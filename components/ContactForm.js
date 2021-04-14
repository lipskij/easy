import React from "react";
import styles from "../styles/Contacts.module.css";

export default function ContactForm() {
  return (
    <div className={styles.emailCell}>
      <div className={styles.emailForm}>
        <form name='contact' method='POST' data-netlify='true'>
          <input type='hidden' name='form-name' value='contact' />
          <div>
            <label htmlFor='name' className='sr-only'>
              Vardas
            </label>
            <input
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
            <input
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
            <textarea
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
