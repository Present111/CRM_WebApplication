import React from "react";
import "./ListPage.css";

const ListPage = () => {
  return (
    <div className="list-page">
      <div className="list-header">
        <h2>Lists</h2>
        <p>0 lists</p>
      </div>
      <div className="list-actions">
        <button className="button-secondary">Admin settings</button>
        <button className="button-secondary">Import</button>
        <button className="button-primary">Create list</button>
      </div>
      <div className="list-content">
        <div className="list-illustration">
          <img
            src="https://via.placeholder.com/400x300" // Thay bằng URL ảnh thực tế
            alt="Illustration"
          />
        </div>
        <div className="list-text">
          <h3>Create lists to power your business.</h3>
          <p>
            Use lists to segment by industry, size, location, value, or anything
            else you can imagine.
          </p>
          <a href="/" className="learn-more">
            Want to learn more about lists? Check out our user guide to{" "}
            <span>learn more</span>.
          </a>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
