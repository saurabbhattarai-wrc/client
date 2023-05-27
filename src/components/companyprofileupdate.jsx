import React, { useState } from "react";
import axios from "axios";

const CompanyProfileUpdate = () => {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedProfile = {
      companyName: companyName,
      email: email,
      address: address,
      phoneNumber: phoneNumber,
      registrationNo: registrationNo,
    };

    axios
      .put("/api/company/profile", updatedProfile)
      .then((response) => {
        console.log(response);
        // handle success response
      })
      .catch((error) => {
        console.log(error);
        // handle error response
      });
  };

  return (
    <div className="my-10 mx-64 font-poppins">
      <div className="mt-10 flex rounded-tl-3xl rounded-br-3xl overflow-hidden">
        <div />
        <form
          className="w-1/2 mt-20 mb-20 ml-8 flex flex-col px-24"
          onSubmit={handleSubmit}
        >
          <div className="flex">
            <h2 className="text-2xl font-semibold mt-2">Update Company Profile</h2>
            <div className="ml-1 w-3 h-3 bg-blue-600 rounded-full"></div>
          </div>

          <label className="font-semibold mt-2">Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="p-1 mt-1 w-72 border rounded-md border-blue-300 focus:ring-blue-500 
            focus:border-blue-500 outline-none"
          />

          <label className="font-semibold mt-2">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-1 mt-1 w-72 border rounded-md border-blue-300 focus:ring-blue-500 
            focus:border-blue-500 outline-none"
          />

          <label className="font-semibold mt-2">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="p-1 mt-1 w-72 border rounded-md border-blue-300 focus:ring-blue-500 
            focus:border-blue-500 outline-none"
          />

          <label className="font-semibold mt-2">Phone Number</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="p-1 mt-1 w-72 border rounded-md border-blue-300 focus:ring-blue-500 
            focus:border-blue-500 outline-none"
          />

          <label className="font-semibold mt-2">
            Registration No (PAN/VAT)
          </label>
          <input
            type="text"
            value={registrationNo}
            onChange={(e) => setRegistrationNo(e.target.value)}
            className="p-1 mt-1 w-72 border rounded-md border-blue-300 focus:ring-blue-500 
            focus:border-blue-500 outline-none"
          />

          <div className="w-72 mt-4">
            <button
              type="submit"
              className="mt-1 text-white px-28 bg-blue-700 hover:bg-blue-800 focus:ring-4 
            focus:ring-blue-300 font-medium text-sm sm:w-auto 
            py-2.5 text-center"
            >
              Update Profile
            </button>
          </div>
        </form>
        <div className="w-1/2 h-auto overflow-hidden">
          <img
            src="./login.png"
            alt="Profile"
            className="object-cover w-full h-full mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyProfileUpdate;
