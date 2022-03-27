import {
  attitudeImage,
  changeImage,
  effectivenessImage,
  efficiencyImage,
  leadershipImage,
  relationshipImage,
  ValuesCurveBG,
} from "assets";
import * as React from "react";
import styles from "./styles.module.css";

interface ValueCardProps {
  image: string;
  title: string;
  text: string;
}

const ValuesCard: React.FC<ValueCardProps> = ({ image, text, title }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={image} alt={title} />
      <p className={styles.cardTtl}>{title}</p>
      <p className={styles.cardTxt}>{text}</p>
    </div>
  );
};

const ValuesSection = () => {
  const Values: ValueCardProps[] = [
    {
      image: changeImage,
      title: "Change",
      text: "We have tagged our values using the abbreviation CLEAR as our organization seeks to chart a clear path for Clients, Competitors and all stakeholders inside and outside the organization.",
    },
    {
      image: leadershipImage,
      title: "Leadership",
      text: "We consider ourselves as leaders in our industry, thought and knowledge leaders to be precise, we seek to discover the way, go the way and show the way to industry counterparts and clients alike",
    },
    {
      image: efficiencyImage,
      title: "Efficiency",
      text: "We consider ourselves as leaders in our industry, thought and knowledge leaders to be precise, we seek to discover the way, go the way and show the way to industry counterparts and clients alike",
    },
    {
      image: effectivenessImage,
      title: "Effectiveness",
      text: "Our commitment is to meet and exceed internal and external customers expectation within the set time and provided, whilst carrying along the customer every step of the way",
    },
    {
      image: attitudeImage,
      title: "Attitude",
      text: "Our attitude is positive, professional and priority is to deliver tailor fit services from the customers’ perspective",
    },
    {
      image: relationshipImage,
      title: "Relationship",
      text: "People are most important to us and we take relationships very seriously. We believe in forming relationships that would last a lifetime, building networks and constructing bridges where there was none initially",
    },
  ];
  return (
    <section className={styles.sectionBG}>
      <div className={`appContainer ${styles.valuesContainer}`}>
        <h2>Company Values</h2>
        <p>
          We have tagged our values using the abbreviation CLEAR as our
          organization seeks to chart a clear path for Clients, Competitors and
          all stakeholders inside and outside the organization.
        </p>
        <div className={styles.cardsWrapper}>
          {Values.map((item, index) => (
            <ValuesCard key={index} {...item} />
          ))}
        </div>
      </div>
      <ValuesCurveBG className={styles.curve} />
    </section>
  );
};

export { ValuesSection };
