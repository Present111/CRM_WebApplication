import React, { useState } from "react";
import PropTypes from "prop-types";

function SidebarMenu({ items, isCollapsed }) {
  const [openSubmenu, setOpenSubmenu] = useState(null); // Lưu trạng thái menu nào đang mở

  const handleToggleSubmenu = (name) => {
    setOpenSubmenu((prev) => (prev === name ? null : name)); // Đóng menu nếu đã mở
  };

  return (
    <ul className="sidebar-menu">
      {items.map((item, index) => (
        <li
          key={index}
          className={`menu-item ${item.submenu ? "has-submenu" : ""} ${
            openSubmenu === item.name ? "open" : ""
          }`}
        >
          <a
            href={item.link || "#"}
            onClick={(e) => {
              if (item.submenu) {
                e.preventDefault(); // Ngăn điều hướng khi có menu con
                handleToggleSubmenu(item.name); // Toggle menu con
              }
            }}
          >
            <span className="menu-icon">{item.icon}</span>
            {!isCollapsed && <span className="menu-text">{item.name}</span>}
          </a>

          {/* Menu con hiển thị bên ngoài */}
          {item.submenu && openSubmenu === item.name && (
            <ul className="submenu">
              {item.submenu.map((subitem, subindex) => (
                <li key={subindex}>
                  <a href={subitem.link}>{subitem.name}</a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

SidebarMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string,
      link: PropTypes.string,
      submenu: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  isCollapsed: PropTypes.bool.isRequired,
};

export default SidebarMenu;
