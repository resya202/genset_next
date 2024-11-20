"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          contactNumber: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-[1200px] mx-auto mt-4">
      {/* Form Section */}
      <div className="w-full">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Contact Number"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full p-2 border rounded"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full p-2 border rounded"
            rows={5}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-primaryDarkBlue"
          >
            Submit
          </button>
        </form>
        {status && <p className="mt-4 text-gray-600">{status}</p>}
      </div>
    </div>
  );
};

export default ContactForm;
