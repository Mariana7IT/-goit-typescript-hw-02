import React from "react";
import s from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className={s.div}>
    <p className={s.p}>{message}</p>
  </div>
);

export default ErrorMessage;
