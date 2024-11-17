import React from "react";
import "./CallPage.css";
import callImage from "../../../src/assets/callPage/call.png";

function CallPage() {
  return (
    <div className="call-page">
      {/* Header Section */}
      <div className="call-header">
        <h2>Calls</h2>
        <p>0 records</p>
      </div>

      {/* Filters Section */}
      <div className="call-filters">
        <input
          type="text"
          className="filter-input"
          placeholder="Recorded calls"
        />
        <button className="filter-clear">X</button>
        <select className="filter-dropdown">
          <option>All calls</option>
          <option>My calls</option>
        </select>
        <button className="filter-add">+ Add view (2/5)</button>
        <button className="filter-all-views">All Views</button>
        <button className="filter-advanced">Advanced filters</button>
      </div>

      {/* No Results Section */}
      <div className="call-results">
        <div className="call-empty">
          <img src={callImage} alt="No matches" className="empty-image" />
          <h3>No matches for the current filters.</h3>
          <p>
            Expecting to see a new item? Try again in a few seconds as the
            system catches up.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="call-footer">
        <div className="pagination">
          <button className="pagination-prev">Prev</button>
          <button className="pagination-next">Next</button>
        </div>
        <select className="page-size">
          <option>50 per page</option>
          <option>25 per page</option>
          <option>100 per page</option>
        </select>
      </div>
    </div>
  );
}

export default CallPage;
