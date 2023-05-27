import React, { useState } from "react";

const UpdateCV = () => {
  const [cvFile, setCVFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setCVFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any actions with the uploaded CV file here
    if (cvFile) {
      console.log("CV file:", cvFile);
      // Upload the CV file to a server or perform any desired actions
    }
  };

  return (
    <div className="my-10 mx-64 font-poppins">
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4">Update CV</h2>
        <label className="font-semibold mb-2">
          Select your updated CV (PDF):
        </label>
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="mb-4"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UpdateCV;
