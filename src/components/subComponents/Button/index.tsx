import * as React from "react";
import styles from "./styles.module.css";

interface ButtonProps {
  size?: "large" | "full";
  type: "green" | "white";
  className?: string;
  onClick: () => void;
  text: string;
} 

const Button:React.FC<ButtonProps> = ({size, type, className, onClick, text}) => {
  return <button className={`${className} ${size ? styles[size] : styles.normal}  ${type ? styles[type] : ""} ${styles.btn}`}>{text}</button>;
};

export { Button };
