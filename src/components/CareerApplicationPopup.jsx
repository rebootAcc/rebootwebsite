import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"; // For animation

const CareerApplicationPopup = ({ jobDetails, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    applyingFor: jobDetails?.jobPostName || "",
    lastQualification: "",
    totalExperience: "",
    location: "",
    uploadCV: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Mobile number must be 10 digits.";
    }
    if (!formData.lastQualification)
      newErrors.lastQualification = "Qualification is required.";
    if (!formData.uploadCV)
      newErrors.uploadCV = "CV file is required (PDF, max 2MB).";
    else if (formData.uploadCV.size > 2 * 1024 * 1024)
      newErrors.uploadCV = "CV file must not exceed 2MB.";
    else if (formData.uploadCV.type !== "application/pdf")
      newErrors.uploadCV = "Only PDF files are allowed.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, uploadCV: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key]);
    });
    formDataObj.append("jobPostName", jobDetails.jobPostName);
    formDataObj.append("jobrole", jobDetails.jobrole);

    try {
      const response = await fetch(`${backendUrl}/api/applications/create`, {
        method: "POST",
        body: formDataObj,
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Failed to submit application.");
      }

      setIsSubmitted(true); // Show thank you message
    } catch (error) {
      alert(error.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!jobDetails) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-[1300]">
      <motion.div
        className="bg-white rounded-lg p-4 lg:p-8 w-[95%] md:w-[80%] lg:w-[60%] xl:w-[50%] relative"
        style={{
          backgroundImage: `url('/images/careerapplicationpopup.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isSubmitted ? 180 : 0 }}
        exit={{ rotateY: -180 }}
        transition={{ duration: 0.6 }}
      >
        <button
          className="absolute top-3 right-3 text-xl text-gray-600 hover:text-black"
          onClick={onClose}
        >
          <IoClose />
        </button>
        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Input Fields */}
            <div className="flex flex-col gap-1">
              <label className="text-sm">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-white rounded h-[3rem] border p-2 border-[#cccccc] text-sm outline-none "
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm">Mobile Number</label>
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                maxLength="10"
                className="bg-white rounded h-[3rem] border p-2 border-[#cccccc] text-sm outline-none"
              />
              {errors.mobileNumber && (
                <p className="text-red-500 text-sm">{errors.mobileNumber}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm">Applying For</label>
              <input
                type="text"
                name="applyingFor"
                value={formData.applyingFor}
                readOnly
                className="bg-gray-100 rounded h-[3rem] border p-2 border-[#cccccc]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm">Last Qualification</label>
              <input
                type="text"
                name="lastQualification"
                value={formData.lastQualification}
                onChange={handleInputChange}
                className="bg-white rounded h-[3rem] border p-2 border-[#cccccc] text-sm outline-none"
              />
              {errors.lastQualification && (
                <p className="text-red-500 text-sm">
                  {errors.lastQualification}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm">Total Experience (Months)</label>
              <input
                type="text"
                name="totalExperience"
                value={formData.totalExperience}
                onChange={handleInputChange}
                className="bg-white rounded h-[3rem] border p-2 border-[#cccccc] text-sm outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm">Upload CV (PDF only)</label>
              <input
                type="file"
                onChange={handleFileChange}
                accept="application/pdf"
                className="bg-white rounded h-[3rem] border p-2 border-[#cccccc] text-sm outline-none"
              />
              {errors.uploadCV && (
                <p className="text-red-500 text-sm">{errors.uploadCV}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="bg-white rounded h-[3rem] border p-2 border-[#cccccc] text-sm outline-none"
              />
            </div>
            {/* Submit Button */}
            <div className="flex flex-col gap-1">
              <label className="text-transparent text-sm">Submit</label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-[80%] flex justify-center items-center h-[3rem] bg-primary rounded text-lg font-medium text-white"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        ) : (
          <div
            className="flex flex-col items-center justify-center  h-full"
            style={{
              transform: "rotateY(180deg)",
            }}
          >
            <h2 className="text-3xl font-bold text-primary">Thank You!</h2>
            <p className="text-lg text-gray-600 mt-2">
              Your application was submitted successfully.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default CareerApplicationPopup;
