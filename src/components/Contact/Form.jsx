import { Input, TextAreas, SubmitButton } from "../../utils";

export const Form = ({
  form,
  isLoading,
  handleChange,
  handleFocus,
  handleBlur,
  handleSubmit,
}) => (
  <form className="w-full flex flex-col gap-3 mt-6 " onSubmit={handleSubmit}>
    <Input
      name="Name"
      type="text"
      placeholder="John"
      value={form.name}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={"input"}
    />
    <Input
      name="Email"
      type="email"
      placeholder="John@gmail.com"
      value={form.email}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={"input"}
    />
    <TextAreas
      name="Message"
      rows={5}
      placeholder="Let me know I can help you!"
      value={form.message}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
    <SubmitButton
      isLoading={isLoading}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  </form>
);
