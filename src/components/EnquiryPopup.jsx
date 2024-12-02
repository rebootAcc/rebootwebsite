import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";

const EnquiryPopup = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    consultationFor: "",
    massage: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = "Mobile Number is required.";
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Mobile Number must be exactly 10 digits.";
    }

    if (!formData.consultationFor)
      newErrors.consultationFor = "Please select a support option.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Valid if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setErrors({});
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${backendUrl}/api/websiteleads/create`,
        formData
      );
      if (response.status === 201) {
        setSuccess("Query submitted successfully!");
        setFormData({
          name: "",
          mobileNumber: "",
          email: "",
          consultationFor: "",
          massage: "",
        });
      }
    } catch (error) {
      setErrors({
        form: error.response?.data?.message || "Failed to submit the query.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col bg-white rounded-lg px-8  flex-1 relative py-5 "
      style={{
        backgroundImage: `url('/images/careerapplicationpopup.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Image
        src="/icons/query-icon.png"
        alt="query icon"
        width={154}
        height={117}
        className="size-[5.45vmax] object-contain self-center"
      />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 py-1 justify-between flex-1"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="capitalize text-base text-[#333]">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-[rgba(67,_133,_245,_0.30)] rounded-lg bg-white outline-none px-6 h-[4rem] text-xl text-[#333]"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="mobileNumber"
              className="capitalize text-base text-[#333]"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              value={formData.mobileNumber}
              onChange={(e) => {
                // Ensure only numbers are entered and no more than 10 digits
                if (/^\d{0,10}$/.test(e.target.value)) {
                  handleChange(e);
                }
              }}
              maxLength="10"
              required
              className="border border-[rgba(67,_133,_245,_0.30)] rounded-lg bg-white outline-none px-6 h-[4rem] text-xl text-[#333]"
            />
            {errors.mobileNumber && (
              <p className="text-red-500">{errors.mobileNumber}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="capitalize text-base text-[#333]">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-[rgba(67,_133,_245,_0.30)] rounded-lg bg-white outline-none px-6 h-[4rem] text-xl text-[#333]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="consultationFor"
              className="capitalize text-base text-[#333]"
            >
              Enquiry For
            </label>
            <select
              id="consultationFor"
              value={formData.consultationFor}
              onChange={handleChange}
              required
              className="border border-[rgba(67,_133,_245,_0.30)] rounded-lg bg-white outline-none px-6 h-[4rem] text-xl text-[#333]"
            >
              <option value="">Select an option</option>
              <option value="App Development">App Development</option>
              <option value="Web Development">Web Development</option>
              <option value="SAAS">SAAS</option>
              <option value="Branding">Branding</option>
              <option value="Marketing">Marketing</option>
              <option value="Others">Others</option>
            </select>
            {errors.consultationFor && (
              <p className="text-red-500">{errors.consultationFor}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="massage" className="capitalize text-base text-[#333]">
            Message
          </label>
          <textarea
            id="massage"
            value={formData.massage}
            onChange={handleChange}
            className="border border-[rgba(67,_133,_245,_0.30)] rounded-lg bg-white outline-none px-6 min-h-[5rem] max-h-[5rem] text-xl text-[#333]"
          />
        </div>
        <div className="flex justify-center items-center w-full">
          <button
            type="submit"
            disabled={loading}
            className={`text-white text-xl font-semibold bg-primary h-[4rem] w-[50%] text-center rounded-lg ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
        {errors.form && <p className="text-red-500 mt-3">{errors.form}</p>}
        {success && <p className="text-green-500 mt-3">{success}</p>}
      </form>
    </div>
  );
};

export default EnquiryPopup;
