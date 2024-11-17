import React from "react";
import "./Header.css";

function Header({ children }) {
  return (
    <header className="header">
      {/* Phần bên trái của Header, hiển thị Sidebar hoặc các thành phần tùy chỉnh */}
      <div className="header-left">{children}</div>

      {/* Phần bên phải của Header */}
      <div className="header-right">
        <div className="header-search">
          <input type="text" placeholder="Search HubSpot" />
          <div className="search-shortcut">Ctrl K</div>
        </div>
        <div className="header-icons">
          <button className="icon-button">Upgrade</button>
          <button className="icon-button">?</button>
          <button className="icon-button">⚙</button>
          <button className="icon-button">🔔</button>
          <button className="icon-button">✨</button>
          <button className="icon-button">👤</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
