import React from "react";
import "./TicketPage.css";

const TicketPage = () => {
  const tickets = [
    {
      ticketName: "Website not loading",
      description: "Customer reports that the website does not load on Chrome.",
      status: "New", // Trạng thái
      related: "Le Quang Phuc / HubSpot", // Liên hệ hoặc Công ty liên quan
      priority: "High", // Mức độ ưu tiên
      assignee: "John Doe", // Người dùng được chỉ định
      category: "Technical Support", // Danh mục
    },
    {
      ticketName: "Payment failed",
      description: "User unable to process payment on checkout page.",
      status: "In Progress", // Trạng thái
      related: "Brian Halligan / HubSpot",
      priority: "Medium",
      assignee: "Jane Smith",
      category: "Billing",
    },
    {
      ticketName: "Forgot password issue",
      description: "Customer unable to reset password using the link provided.",
      status: "Resolved", // Trạng thái
      related: "Maria Johnson / HubSpot",
      priority: "Low",
      assignee: "David Brown",
      category: "Account Management",
    },
    {
      ticketName: "App crashing",
      description: "Mobile app crashes upon logging in.",
      status: "New",
      related: "James Anderson / HubSpot",
      priority: "High",
      assignee: "Emily Davis",
      category: "Mobile",
    },
  ];

  return (
    <div className="ticket-page">
      <div className="ticket-header">
        <h2>Tickets</h2>
        <p>{tickets.length} records</p>
      </div>
      <div className="ticket-actions">
        <button className="button-primary">Create ticket</button>
        <button className="button-secondary">Import</button>
        <button className="button-secondary">Actions</button>
      </div>
      <div className="ticket-table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Ticket Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Related Contact/Company</th>
              <th>Priority</th>
              <th>Assignee</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={index}>
                <td>{ticket.ticketName}</td>
                <td>{ticket.description}</td>
                <td>{ticket.status}</td>
                <td>{ticket.related}</td>
                <td>{ticket.priority}</td>
                <td>{ticket.assignee}</td>
                <td>{ticket.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketPage;
