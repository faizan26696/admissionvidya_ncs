import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { State, City } from "country-state-city";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  RiUserFill,
  RiMailFill,
  RiPhoneFill,
  RiCalendar2Line,
} from "react-icons/ri";
import {
  FaBuildingColumns,
  FaTreeCity,
  FaGraduationCap,
} from "react-icons/fa6";

const CounselingRegForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [indiaCities, setIndiaCities] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [highestQualification, setHighestQualification] = useState("");
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const countryCode = "IN";

  const getValidationSchema = () => {
    return Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      contactNumber: Yup.string()
        .matches(/^\d+$/, "Must be only digits")
        .min(10, "Must be at least 10 digits")
        .required("Required"),
      highestQualification: Yup.string().required("Required"),
      date: Yup.date().required("Required"),
      state: Yup.object().shape({
        value: Yup.object({
          code: Yup.string().required("Required"),
          name: Yup.string().required("Required"),
        }),
        label: Yup.string().required("Required"),
      }),
      city: Yup.object().shape({
        value: Yup.string().required("Required"),
        label: Yup.string().required("Required"),
      }),
    });
  };

  const addressFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contactNumber: "",
      highestQualification: "",
      date: null,
      state: null,
      city: null,
    },
    validationSchema: getValidationSchema(),
    validateOnChange: false, // Delay validation until onBlur
  });

  const updatedStates = () => {
    const indiaStates = State.getStatesOfCountry(countryCode);
    return indiaStates
      ? indiaStates.map((state) => ({
          value: { code: state.isoCode, name: state.name }, // Use an object with code and name
          label: state.name,
        }))
      : [];
  };

  const updatedCities = async (stateCode) => {
    try {
      const cities = await City.getCitiesOfState(countryCode, stateCode);
      return Array.isArray(cities)
        ? cities.map((city) => ({
            value: city.name,
            label: city.name,
          }))
        : [];
    } catch (error) {
      console.error("Error getting cities:", error);
      return [];
    }
  };

  const { values, setFieldValue, setValues, handleSubmit, errors, touched } =
    addressFormik;

  const HandleCollectUserData = async () => {
    if (
      name &&
      email &&
      contactNumber &&
      highestQualification &&
      selectedDate &&
      selectedState &&
      values.city
    ) {
      try {
        const response = await axios.post(
          "https://backend-c46c.onrender.com/api/forms/submit",
          {
            name,
            email,
            contactNumber,
            highestQualification,
            selectedDate,
            state: selectedState.value.name,
            city: selectedCity.value,
          }
        );

        toast.success("Submitted successfully");
        console.log("API Response:", response.data);
        console.log("CounseLingFormData:", {
          name,
          email,
          contactNumber,
          highestQualification,
          selectedDate,
          state: selectedState.value.name,
          city: selectedCity.value,
        });

        setName("");
        setEmail("");
        setContactNumber("");
        setHighestQualification("");
        setSelectedDate(null);
        setIndiaCities(null);
        setSelectedState(null);
        setSelectedCity(null);
        addressFormik.resetForm();
      } catch (error) {
        toast.error("Failed to submit");
        console.error("API Error:", error);
      }
    } else {
      toast.warn("Please fill out details properly");
    }
  };

  useEffect(() => {
    if (values.state) {
      const stateCode = values.state.value.code;
      setSelectedState(values.state);
      updatedCities(stateCode).then((cities) => {
        setIndiaCities(cities);

        // Reset city value if the selected city is not present in the new list
        const selectedCityValue = values.city ? values.city.value : null;
        const selectedCity = cities.find(
          (city) => city.value === selectedCityValue
        );
        if (!selectedCity) {
          setFieldValue("city", null);
        } else {
          setSelectedCity(selectedCity);
        }
      });
    }
  }, [values.state, setFieldValue, values.city]);

  return (
    <div className="h-full md:flex font-rubik">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-900 to-[#00009c] i justify-around items-center hidden">
        <div className="text-left sm:pl-4 sm:h-[50vh] pb-4">
          <h1 className="text-white font-bold text-4xl font-sans">
            GET A FREE COUNSELING SESSION
          </h1>
          <p className="text-white mt-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
            veniam saepe laudantium molestiae, commodi unde tenetur ex
            asperiores.
          </p>
          <button
            type="submit"
            className="block w-28 bg-white text-indigo-800 mt-6 py-2 rounded-2xl font-bold mb-2"
          >
            Read More
          </button>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form
          onSubmit={handleSubmit}
          className="bg-white max-w-md w-full px-[1rem]"
        >
          <h1 className="text-gray-800 font-bold text-2xl mb-1">
            Register Here
          </h1>
          <p className="text-sm font-normal text-gray-600 mb-7">
            Get A Free Counseling Session
          </p>

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 mx-4">
            <RiUserFill className="h-5 w-5 text-gray-400" />
            <input
              className={`pl-2 outline-none border-none flex-grow ${
                touched.name && errors.name ? "border-red-500" : ""
              }`}
              type="text"
              name="name"
              id="name"
              placeholder="Student’s Name"
              onChange={(e) => setName(e.target.value)}
              onBlur={addressFormik.handleBlur}
              value={name}
            />
            {touched.name && errors.name && (
              <div className="text-red-500 text-xs mt-1">{errors.name}</div>
            )}
          </div>

          {/* Email ID */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 mx-4">
            <RiMailFill className="h-5 w-5 text-gray-400" />
            <input
              className={`pl-2 outline-none border-none flex-grow ${
                touched.email && errors.email ? "border-red-500" : ""
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Email ID"
              onChange={(e) => setEmail(e.target.value)}
              onBlur={addressFormik.handleBlur}
              value={email}
            />
            {touched.email && errors.email && (
              <div className="text-red-500 text-xs mt-1">{errors.email}</div>
            )}
          </div>

          {/* Contact No */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 mx-4">
            <RiPhoneFill className="h-5 w-5 text-gray-400" />
            <input
              className={`pl-2 outline-none border-none flex-grow ${
                touched.contactNumber && errors.contactNumber
                  ? "border-red-500"
                  : ""
              }`}
              type="tel"
              name="contactNumber"
              id="contactNumber"
              placeholder="Contact Number"
              onChange={(e) => setContactNumber(e.target.value)}
              onBlur={addressFormik.handleBlur}
              value={contactNumber}
            />
            {touched.contactNumber && errors.contactNumber && (
              <div className="text-red-500 text-xs mt-1">
                {errors.contactNumber}
              </div>
            )}
          </div>

          {/* Highest Qualification */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 mx-4">
            <FaGraduationCap className="h-5 w-5 text-gray-400" />
            <input
              className={`pl-2 outline-none border-none flex-grow ${
                touched.highestQualification && errors.highestQualification
                  ? "border-red-500"
                  : ""
              }`}
              type="text"
              name="highestQualification"
              id="highestQualification"
              placeholder="Highest Qualification"
              onChange={(e) => setHighestQualification(e.target.value)}
              onBlur={addressFormik.handleBlur}
              value={highestQualification}
            />
            {touched.highestQualification && errors.highestQualification && (
              <div className="text-red-500 text-xs mt-1">
                {errors.highestQualification}
              </div>
            )}
          </div>

          {/* Date Picker */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 mx-4">
            <RiCalendar2Line className="h-5 w-5 text-gray-400" />
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy"
              placeholderText="Select Date"
              className="pl-2 outline-none border-none flex-grow"
            />
          </div>

          {/* State */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 mx-4">
            <FaBuildingColumns className="h-5 w-5 text-gray-400" />
            <Select
              id="state"
              name="state"
              options={updatedStates()}
              value={selectedState}
              onChange={(value) => {
                setValues({ state: value, city: null }, false);
                setSelectedState(value);
                // Access state code: value.code
                // Access state name: value.name
                updatedCities(value.code).then((cities) => {
                  setIndiaCities(cities);

                  // Reset city value if the selected city is not present in the new list
                  const selectedCityValue = values.city
                    ? values.city.value
                    : null;
                  const selectedCity = cities.find(
                    (city) => city.value === selectedCityValue
                  );
                  if (!selectedCity) {
                    setFieldValue("city", null);
                  } else {
                    setSelectedCity(selectedCity);
                  }
                });
              }}
              className="pl-2 outline-none border-none flex-grow"
            />
          </div>

          {/* City */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 mx-4">
            <FaTreeCity className="h-5 w-5 text-gray-400" />
            <Select
              id="city"
              name="city"
              options={indiaCities}
              value={selectedCity}
              onChange={(value) => setFieldValue("city", value)}
              className="pl-2 outline-none border-none flex-grow"
            />
          </div>

          {/* Register Button */}
          <div className="flex items-center justify-center py-2 px-3 rounded-2xl mb-4">
            <button
              type="button"
              onClick={HandleCollectUserData}
              className="block   px-6  bg-blue-800 hover:bg-[#00009c] duration-300 mt-4 py-2 rounded-lg text-white font-semibold mb-2 mx-auto"
            >
              Register
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default CounselingRegForm;
