import React from 'react';
import UserComponent from './UserComponent';
import JobPostingComponent from './JobPostingComponent';
import CompanyComponent from './CompanyComponent';

const AdminDashboard = () => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' }
  ];

  const jobPostings = [
    { id: 1, title: 'Job 1' },
    { id: 2, title: 'Job 2' },
    { id: 3, title: 'Job 3' }
  ];

  const companies = [
    { id: 1, name: 'Company 1' },
    { id: 2, name: 'Company 2' },
    { id: 3, name: 'Company 3' }
  ];

  const handleDeleteUser = (userId) => {
    // Handle user deletion logic here
    console.log(`Deleting user with ID ${userId}`);
  };

  const handleDeleteJobPosting = (jobId) => {
    // Handle job posting deletion logic here
    console.log(`Deleting job posting with ID ${jobId}`);
  };

  const handleDeleteCompany = (companyId) => {
    // Handle company deletion logic here
    console.log(`Deleting company with ID ${companyId}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <div className="flex space-x-4">
        <div className="border border-gray-300 rounded p-4">
          <h2 className="text-lg font-bold mb-2">Users</h2>
          {users.map((user) => (
            <UserComponent
              key={user.id}
              user={user}
              onDeleteUser={handleDeleteUser}
            />
          ))}
        </div>

        <div className="border border-gray-300 rounded p-4">
          <h2 className="text-lg font-bold mb-2">Job Postings</h2>
          {jobPostings.map((job) => (
            <JobPostingComponent
              key={job.id}
              jobPosting={job}
              onDeleteJobPosting={handleDeleteJobPosting}
            />
          ))}
        </div>

        <div className="border border-gray-300 rounded p-4">
          <h2 className="text-lg font-bold mb-2">Companies</h2>
          {companies.map((company) => (
            <CompanyComponent
              key={company.id}
              company={company}
              onDeleteCompany={handleDeleteCompany}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
