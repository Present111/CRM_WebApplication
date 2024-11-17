import React from "react";
import "./DealPage.css";

const DealPage = () => {
  const deals = [
    {
      dealName: "Sample Deal",
      value: "$10,000",
      associated: "Le Quang Phuc / HubSpot", // Liên hệ hoặc Công ty liên kết
      stage: "Negotiation", // Giai đoạn
      closeDate: "Dec 15, 2024", // Ngày đóng
      notes: "Priority client", // Ghi chú
      owner: "John Doe", // Chủ sở hữu deal
    },
  ];

  return (
    <div className="deal-page">
      <div className="deal-header">
        <h2>Deals</h2>
        <p>{deals.length} record</p>
      </div>
      <div className="deal-actions">
        <button className="button-primary">Create deal</button>
        <button className="button-secondary">Import</button>
        <button className="button-secondary">Actions</button>
      </div>
      <div className="deal-table-wrapper">
        {/* Thanh cuộn ngang áp dụng ở đây */}
        <table>
          <thead>
            <tr>
              <th>Deal Name</th>
              <th>Value</th>
              <th>Associated Contact/Company</th>
              <th>Stage</th>
              <th>Close Date</th>
              <th>Notes</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            {deals.map((deal, index) => (
              <tr key={index}>
                <td>{deal.dealName}</td>
                <td>{deal.value}</td>
                <td>{deal.associated}</td>
                <td>{deal.stage}</td>
                <td>{deal.closeDate}</td>
                <td>{deal.notes}</td>
                <td>{deal.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DealPage;
