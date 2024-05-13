import { AlertContent } from "./AlertContent";
export const Alert = ({ type, text }) => (
  <div className="absolute top-16 left-0 right-0 flex justify-center items-center">
    <AlertContent type={type} text={text} />
  </div>
);
