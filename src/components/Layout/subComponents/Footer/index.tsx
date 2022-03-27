import { FacebookLogoWhite, TwitterLogoWhite } from "assets";
import * as React from "react";
import styles from "./styles.module.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section className={styles.footerBG}>
      <div className={`appContainer ${styles.footerContainer}`}>
        <div className={styles.footerListWrapper}>
          <div>
            <p className={styles.ttl}>Clearview</p>
            <p className={styles.txt}>
              Clearview Advisory is an Indigenous Startup Business Management
              and Advisory company founded in Lagos, focused on redefining HR
              Practices in Nigeria and Africa at large; using novel ideas,
              creative thinking and the application of technology, ClearView
              seeks to fill the gap in the business space by providing cutting
              edge and affordable business consultancy and coaching services to
              Small, Medium and Large scale enterprises.
            </p>
          </div>
          <div>
            <p className={styles.ttl}>Services</p>
            <ul>
              <li>Human Capital Consulting</li>
              <li>Business Advisory</li>
              <li>Research & Development</li>
              <li>Digital Transformation</li>
            </ul>
          </div>
          <div>
            <p className={styles.ttl}>Contact</p>
            <ul>
              <li>+233 705 890 900</li>
              <li>+233 705 890 900</li>
              <li>
                <a>info@clearviewadvisory.com</a>
              </li>
            </ul>

            <p className={`${styles.ttl} ${styles.socialsTtl}`}>Socials</p>
            <div>
              <FacebookLogoWhite title="facebook" />
              <TwitterLogoWhite title="twitter" />
            </div>
          </div>
        </div>
        <hr />
        <small className={styles.copyright}>
          clearview {date} - Design by Philip with ❤️
        </small>
      </div>
    </section>
  );
};
export { Footer };
