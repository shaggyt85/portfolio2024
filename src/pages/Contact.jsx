import { Alert, Socials } from "../components";
import { ContactForm, FoxModel } from "../components/Contact";
import { useAlert, useForm, useAnimation, useEmail } from "../hooks";

export const Contact = () => {
  const initialState = { name: "", email: "", message: "" };
  const [form, handleChange, resetForm] = useForm(initialState);
  const { show, text, type, showAlert, hideAlert } = useAlert();
  const [currentAnimation, handleFocus, handleBlur, setCurrentAnimation] =
    useAnimation("idle");
  const [isLoading, handleSubmit] = useEmail(
    form,
    showAlert,
    hideAlert,
    resetForm,
    setCurrentAnimation
  );
  return (
    <>
      <section className="relative flex lg:flex-row flex-col max-container ">
        {show && <Alert text={text} type={type} />}
        <ContactForm
          {...{
            form,
            isLoading,
            handleChange,
            handleFocus,
            handleBlur,
            handleSubmit,
          }}
        />
        <FoxModel currentAnimation={currentAnimation} />
      </section>
      <section className="max-social">
        <Socials />
      </section>
    </>
  );
};
