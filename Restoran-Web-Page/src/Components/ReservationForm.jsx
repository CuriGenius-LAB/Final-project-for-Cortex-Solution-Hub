import { motion } from "motion/react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";
import { useState } from "react";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    datetime: "",
    people: "",
    message: "",
  });

  const emailRegex = /^[A-Za-z]{3,}[A-Za-z0-9]*@(gmail|yahoo)\.(com|pk)$/;

  const isValidEmail = emailRegex.test(formData.email);

  const handleChange = (target) => {
    const {id , value} = target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }))
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if(!formData.name || !formData.email 
      
      || !formData.datetime || !formData.people || !formData.message) return

    alert("Form Submitted Successfully");

    setFormData({

      name: "",
      email: "",
      datetime: "",
      people: "",
      message: "",

    })

  }
  

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          id="name"
          type="text"
          label="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <InputField
          id="email"
          type="email"
          label="Your Email"
          value={formData.email}
          onChange={handleChange}
          className={!isValidEmail && formData.email ? "border-2 border-red-500 focus:border-red-500 " : ""}
        />
        <InputField
          id="datetime"
          type="datetime-local"
          label="Date & Time"
          value={formData.datetime}
          onChange={handleChange}
        />
        <SelectField
          id="people"
          label="No Of People"
          options={["1", "2", "3"]}
          value={formData.people}
          onChange={handleChange}
        />
      </div>

      <TextareaField
        id="message"
        label="Special Request"
        value={formData.message}
        onChange={handleChange}
      />

      <button
        type="submit"
        disabled={!isValidEmail}
        className={`w-full text-white py-4 Px-3 font-nunito font-medium rounded uppercase cursor-pointer z-1 ${!isValidEmail ? "bg-gray-600 hover:cursor-not-allowed text-amber-100" : "relative hero-cta overflow-hidden bg-primary hover:text-[var(--primary)]"}`}
      >
        Book Now
      </button>
    </form>
  );
};

export default ReservationForm;
