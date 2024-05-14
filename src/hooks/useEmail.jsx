import { useState } from "react";
import { SendEmail } from "../services/SendEmail";

export const useEmail = (
  form,
  showAlert,
  hideAlert,
  resetForm,
  setCurrentAnimation
) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");
    SendEmail(form)
      .then(() => {
        setIsLoading(false);
        showAlert("Message sent successfully!", "success");
        setCurrentAnimation("idle");
        setTimeout(() => {
          hideAlert();
          resetForm();
        }, [2000]);
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation("idle");
        console.log(error);
        showAlert("Something went wrong!", "error");
      });
  };
  return [isLoading, handleSubmit];
};
