import { Form } from "./Form";
export const ContactForm = ({
  form,
  isLoading,
  handleChange,
  handleFocus,
  handleBlur,
  handleSubmit,
}) => (
  <div className="flex-1 min-w-[50%] flex flex-col">
    <h1 className="head-text">Get in Touch</h1>
    <Form
      form={form}
      isLoading={isLoading}
      handleChange={handleChange}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
      handleSubmit={handleSubmit}
    />
  </div>
);
