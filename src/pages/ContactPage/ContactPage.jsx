import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const contacts = [
    {
      name: "Le Quang Phuc",
      email: "contengikhong123@gmail.com",
      phone: "--",
      company: "--",
      owner: "24. Le Quang Phuc",
      revenue: "--",
      dealAmount: "--",
    },
    {
      name: "Brian Halligan (Sample)",
      email: "bh@hubspot.com",
      phone: "--",
      company: "HubSpot",
      owner: "No owner",
      revenue: "--",
      dealAmount: "--",
    },
    {
      name: "Maria Johnson (Sample)",
      email: "emailmaria@hubspot.com",
      phone: "--",
      company: "HubSpot",
      owner: "No owner",
      revenue: "--",
      dealAmount: "--",
    },
  ];

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h2>Contacts</h2>
        <p>{contacts.length} records</p>
      </div>
      <div className="contact-actions">
        <button className="button-primary">Create contact</button>
        <button className="button-secondary">Import</button>
        <button className="button-secondary">Actions</button>
      </div>
      <div className="contact-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Company Name</th>
              <th>Contact Owner</th>
              <th>Total Revenue</th>
              <th>Recent Deal Amount</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.company}</td>
                <td>{contact.owner}</td>
                <td>{contact.revenue}</td>
                <td>{contact.dealAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactPage;
