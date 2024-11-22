import React, { useState } from "react";
import axios from "axios";

const BlogDetailsPageEnquiry = () => {
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
    <div className="p-5 flex flex-col gap-4 rounded-md bg-[#F7F7F7]">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="h-[3.5rem] bg-white border outline-none border-[#cccccc] rounded px-2"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}

        <input
          type="text"
          id="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={(e) => {
            // Ensure only numbers are entered and no more than 10 digits
            if (/^\d{0,10}$/.test(e.target.value)) {
              handleChange(e);
            }
          }}
          className="h-[3.5rem] bg-white border outline-none border-[#cccccc] rounded px-2"
        />
        {errors.mobileNumber && (
          <p className="text-red-500">{errors.mobileNumber}</p>
        )}

        <input
          type="text"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="h-[3.5rem] bg-white border outline-none border-[#cccccc] rounded px-2"
        />

        <select
          id="consultationFor"
          value={formData.consultationFor}
          onChange={handleChange}
          className="h-[3.5rem] bg-white border outline-none border-[#cccccc] rounded px-2"
        >
          <option value="">Enquiry For</option>
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

        <textarea
          id="massage"
          placeholder="Write a message"
          value={formData.massage}
          onChange={handleChange}
          className="min-h-[6.5rem] max-h-[6.5rem] outline-none bg-white border border-[#cccccc] rounded p-2"
        ></textarea>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            disabled={loading}
            className={`w-fit px-6 h-[3rem] text-lg font-medium flex justify-center items-center bg-[#0061FF] text-white rounded-md ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Submitting..." : "Send Query"}
          </button>
        </div>
        {errors.form && <p className="text-red-500 mt-3">{errors.form}</p>}
        {success && <p className="text-green-500 mt-3">{success}</p>}
      </form>
    </div>
  );
};

export default BlogDetailsPageEnquiry;
