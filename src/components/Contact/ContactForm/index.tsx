import { BrandCurveBG } from "assets";
import { Button } from "components/subComponents";
import styles from "./styles.module.css";

const ContactForm = () => {
  return (
    <section className={styles.sectionBG}>
      <div className={`appContainer ${styles.contactFormContainer}`}>
        <div className={styles.textArea}>
          <p>Contact Us</p>
          <h4>GET IN TOUCH</h4>
          <p>We’d love to hear from you, please fill the form</p>
        </div>
        <form className={styles.formContainer}>
          <div className={styles.halfInput}>
            <label>First name </label>
            <input name="firstName" type="text" required />
          </div>
          <div className={styles.halfInput}>
            <label>Last name </label>
            <input name="lastName" type="text" required />
          </div>
          <div className={styles.fullInput}>
            <label>Email address </label>
            <input name="email" type="email" required />
          </div>
          <div className={styles.fullInput}>
            <label>Message </label>
            <textarea name="message" required />
          </div>
          <Button
            className={styles.btn}
            onClick={() => {}}
            text="Send Message"
            size="full"
            type="green"
          />
        </form>
      </div>
      <BrandCurveBG className={styles.curve} />
    </section>
  );
};

export { ContactForm };
