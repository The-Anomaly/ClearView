import {
  LocationGreenOutline,
  MailGreenOutline,
  PhoneGreenOutline,
} from "assets";
import * as React from "react";
import styles from "./styles.module.css";

interface CardProps {
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title: string | undefined }
  >;
  title: string;
  text: string;
  info: JSX.Element;
}

const ContactCard: React.FC<CardProps> = ({ Icon, title, text, info }) => {
  return (
    <div className={styles.cardContainer}>
      <div>
        <Icon title={title} />
      </div>
      <p>{title}</p>
      <p>{text}</p>
      {info}
    </div>
  );
};

const ContactInfoSection = () => {
  const contactInfo: CardProps[] = [
    {
      Icon: MailGreenOutline,
      title: "email",
      text: "Shoot us a mail",
      info: (
        <p>
          <a href="mailto: info@clearview.com" rel="noopener noreferrer">
            info@clearview.com
          </a>{" "}
          <br />
          <a href="mailto: contact@clearview.com" rel="noopener noreferrer">
            contact@clearview.com
          </a>
        </p>
      ),
    },
    {
      Icon: LocationGreenOutline,
      title: "office",
      text: "Come say hello at our office",
      info: <p>100 clearview street <br /> Muri okunola victoria island Lagos</p>,
    },
    {
      Icon: PhoneGreenOutline,
      title: "phone",
      text: "Mon -Fri  8am - 5pm",
      info: (
        <p>
          <a
            data-testid="number1"
            rel="noopener noreferrer"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=2338034657894"
          >
            +233 803 465 7894
          </a>
          <br />
          <a
            data-testid="number2"
            rel="noopener noreferrer"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=2338045678754"
          >
            +233 804 567 8754
          </a>
        </p>
      ),
    },
  ];
  return (
    <section className={`appContainer ${styles.contactContainer}`}>
      {contactInfo.map((item, index) => (
        <ContactCard {...item} key={index} />
      ))}
    </section>
  );
};

export { ContactInfoSection };
