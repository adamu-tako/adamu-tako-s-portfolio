import { useState } from "react";
import FormInput from "../reusable/FormInput";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [activeTheme, setTheme] = useThemeSwitcher();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendMessage = () => {
    let templateParams = { ...contactForm };
    emailjs
      ?.send(
        "service_96xlbfr",
        "template_qvz51ve",
        templateParams,
        "4l4jrooPE90Lq8po6"
      )
      .then(
        (result) => {
          console.log(result);
          setContactForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          toast(
            "Thank you for contacting me, I will respond to your message as soon as I can.",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: activeTheme === "dark" ? "dark" : "light",
            }
          );
        },
        (error) => {
          console.log(error);
          toast("Something went wrong... please retry", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: activeTheme === "dark" ? "dark" : "light",
          });
        }
      );
  };

  return (
    <>
      <div className="w-full lg:w-[100%]">
        <div className="leading-loose">
          <form className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
            <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
              Contact Form
            </p>
            <FormInput
              inputLabel="name"
              labelFor="name"
              inputValue={contactForm.name}
              handleChange={handleChange}
              inputType="text"
              inputId="name"
              inputName="name"
              placeholderText="Your Name"
              ariaLabelName="Name"
            />
            <FormInput
              inputLabel="email"
              labelFor="email"
              inputType="email"
              inputId="email"
              inputValue={contactForm.email}
              handleChange={handleChange}
              inputName="email"
              placeholderText="Your email"
              ariaLabelName="Email"
            />
            <FormInput
              inputLabel="subject"
              labelFor="subject"
              inputType="text"
              inputId="subject"
              inputName="subject"
              inputValue={contactForm.subject}
              handleChange={handleChange}
              placeholderText="Subject"
              ariaLabelName="Subject"
            />

            <div className="mt-6">
              <label
                className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                id="message"
                name="message"
                value={contactForm.message}
                onChange={handleChange}
                cols="14"
                rows="6"
                aria-label="Message"></textarea>
            </div>

            <div
              onClick={sendMessage}
              className="font-general-medium cursor-pointer w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
              Send Message
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ContactForm;
