import * as React from "react";
import styles from "./styles.module.css";

export interface TestimonialCardProps {
  image: string;
  name: string;
  role: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({image, name, role, text}) => {
  return (
    <div className={styles.card}>
      <div>
        <img src={image} alt="" />
        <p>
          <span>{name}</span>
          <br /> {role}
        </p>
      </div>
      <p>
       {text}
      </p>
    </div>
  );
};

export { TestimonialCard };
