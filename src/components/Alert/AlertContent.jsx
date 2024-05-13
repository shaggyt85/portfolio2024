import { AlertText } from "./AlertText";
export const AlertContent = ({ type, text }) => (
  <div
    className={`${
      type === "danger" ? "bg-red-700" : "bg-blue-700"
    } p-2 text-indigo-100 leading-none rounded-full flex lg:inline-flex`}
    role="alert"
  >
    <AlertText type={type} />
    <p className="m-2 text-left">{text}</p>
  </div>
);
