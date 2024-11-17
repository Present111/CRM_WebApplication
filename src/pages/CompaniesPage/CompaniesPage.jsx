import React from "react";
import "./CompaniesPage.css";

const CompanyPage = () => {
  const companies = [
    {
      companyName: "--",
      companyOwner: "No owner",
      createDate: "Nov 15, 2024 3:13 PM GMT+7",
      phoneNumber: "--",
      lastActivityDate: "--",
      city: "--",
      country: "--",
      industry: "--",
    },
  ];

  return (
    <div className="company-page">
      <div className="company-header">
        <h2>Companies</h2>
        <p>{companies.length} record</p>
      </div>
      <div className="company-actions">
        <button className="button-primary">Create company</button>
        <button className="button-secondary">Import</button>
        <button className="button-secondary">Actions</button>
      </div>
      <div className="company-table-wrapper">
        {/* Thanh cuộn ngang áp dụng ở đây */}
        <table>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Company Owner</th>
              <th>Create Date (GMT+7)</th>
              <th>Phone Number</th>
              <th>Last Activity Date (GMT+7)</th>
              <th>City</th>
              <th>Country/Region</th>
              <th>Industry</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr key={index}>
                <td>{company.companyName}</td>
                <td>{company.companyOwner}</td>
                <td>{company.createDate}</td>
                <td>{company.phoneNumber}</td>
                <td>{company.lastActivityDate}</td>
                <td>{company.city}</td>
                <td>{company.country}</td>
                <td>{company.industry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyPage;
