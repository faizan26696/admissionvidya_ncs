import React, { useEffect, useState } from "react";
import Button from "../ReusableComponent/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [message, setMessage] = useState("");

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subject: "",
    contactNumber: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    // Update the corresponding state based on the input's id
    switch (id) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "subject":
        setSubject(value);
        break;
      case "contactNumber":
        setContactNumber(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }

    // Clear the corresponding error when the input changes
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newFormErrors = {
      name: "",
      email: "",
      subject: "",
      contactNumber: "",
      message: "",
    };

    // Example validation (customize according to your requirements)
    if (!name) {
      newFormErrors.name = "Name is required";
      isValid = false;
    }

    // Add more validations for other fields

    setFormErrors(newFormErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Make an API request using Axios
        const response = await axios.post(
          "https://backend-c46c.onrender.com/api/forms/submit",
          { name, email, subject, contactNumber, message }
        );

        // Check the response and handle accordingly
        console.log("ContactFormData:", {
          name,
          email,
          subject,
          contactNumber,
          message,
        });
        toast.success("Submitted successfully");
        console.log("API Response:", response.data);

        // Reset the form data
        setName("");
        setEmail("");
        setSubject("");
        setContactNumber("");
        setMessage("");
      } catch (error) {
        toast.error("Failed to Submit");
        console.error("API Error:", error);
      }
    } else {
      toast.warn("Please fill out details properly");
      // console.log("null");
    }
  };

  return (
    <div className="">
      <div className="text-center py-2 pt-[3rem]  ">
        <h1 className="text-blue-700 text-xl pb-[1rem] sm:text-3xl p-2 font-bold">
          {" "}
          Get In Touch with Our Counseler
        </h1>
      </div>
      <div className="flex flex-wrap sm:flex-row justify-between px-4 sm:px-8 items-center mx-auto rounded-lg bg-white w-full sm:w-[90%] lg:w-[80%] xl:w-[80%] ">
        <div
          data-aos="zoom-in-up"
          data-aos-offset="200"
          data-aos-duration="900"
          className="w-full sm:w-1/2 text-start mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-black py-4">
            Stay Connected with Us.
          </h2>
          <p className="text-sm sm:text-base text-gray-500 pb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            necessitatibus consequatur facere distinctio quis natus maiores
            minima id alias.
          </p>
          <img
            className="sm:w-[25rem]"
            src="images/contact.gif"
            alt="contact"
          />
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-offset="280"
          data-aos-duration="900"
          className="w-full sm:w-1/2 bg-white p-5 rounded-lg mt-6 sm:mt-0"
        >
          <h3 className="pt-4 text-[0.9rem] sm:text-xl font-bold text-center text-black">
            Contact With Us
          </h3>
          <form
            onSubmit={handleSubmit}
            className="pt-6 pb-8 mb-4 sm:w-[90%] sm:mx-auto bg-white rounded"
          >
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-bold text-gray-700"
              >
                Full Name
              </label>
              <input
                className={`w-full px-3 py-2 mb-2 text-sm leading-tight text-gray-700 border border-black outline-black rounded shadow appearance-none ${
                  formErrors.name ? "border-red-500" : ""
                }`}
                id="name"
                type="text"
                placeholder="Full Name"
                onChange={handleInputChange}
                value={name}
              />
              <p className="text-red-500">{formErrors.name}</p>
            </div>

            <div className="mb-2">
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-bold text-gray-700"
              >
                Email
              </label>
              <input
                className={`w-full px-3 py-2 mb-2 text-sm leading-tight text-gray-700 border border-black outline-black rounded shadow appearance-none ${
                  formErrors.email ? "border-red-500" : ""
                }`}
                id="email"
                type="email"
                placeholder="Email"
                onChange={handleInputChange}
                value={email}
              />
              <p className="text-red-500">{formErrors.email}</p>
            </div>
            <div className="mb-2">
              <label
                htmlFor="subject"
                className="block mb-1 text-sm font-bold text-gray-700"
              >
                Subject
              </label>
              <input
                className={`w-full px-3 py-2 mb-2 text-sm leading-tight text-gray-700 border border-black outline-black rounded shadow appearance-none ${
                  formErrors.subject ? "border-red-500" : ""
                }`}
                id="subject"
                type="text"
                placeholder="Subject"
                onChange={handleInputChange}
                value={subject}
              />
              <p className="text-red-500">{formErrors.subject}</p>
            </div>

            <div className="mb-2">
              <label
                htmlFor="contactNumber"
                className="block mb-1 text-sm font-bold text-gray-700"
              >
                Contact No
              </label>
              <input
                className={`w-full px-3 py-2 mb-2 text-sm leading-tight text-gray-700 border border-black outline-black rounded shadow appearance-none ${
                  formErrors.contactNumber ? "border-red-500" : ""
                }`}
                id="contactNumber"
                type="tel"
                placeholder="Contact No"
                onChange={handleInputChange}
                value={contactNumber}
              />
              <p className="text-red-500">{formErrors.contactNumber}</p>
            </div>

            <div className="mb-2">
              <label
                htmlFor="message"
                className="block mb-1 text-sm font-bold text-gray-700"
              >
                Your Message
              </label>
              <textarea
                className={`w-full px-3 py-2 mb-2 text-sm leading-tight text-gray-700 border border-black outline-black rounded shadow appearance-none ${
                  formErrors.message ? "border-red-500" : ""
                }`}
                id="message"
                placeholder="Write your message"
                onChange={handleInputChange}
                value={message}
              />
              <p className="text-red-500">{formErrors.message}</p>
            </div>
            <div className="mb-6 py-2 text-center">
              <Button
                className="w-full md:w-[120px] px-4 py-2 font-bold text-white bg-blue-800 rounded-lg hover:bg-[#00009c] focus:outline-none focus:shadow-outline duration-300"
                type="submit"
                text="Submit"
              />
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ContactForm;
