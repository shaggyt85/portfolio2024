import emailjs from "@emailjs/browser";
export const SendEmail = (form) => {
  return emailjs.send(
    import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    {
      from_name: form.name,
      to_name: "Shaggy",
      from_email: form.email,
      to_email: "csoperativo@gmail.com",
      message: form.message,
    },
    import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
  );
};
