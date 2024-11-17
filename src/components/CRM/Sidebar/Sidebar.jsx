import React, { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import "../../styles/Sidebar.css";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { name: "Bookmarks", icon: "🔖" },
    { name: "Workspaces", icon: "🗂️" },
    {
      name: "CRM",
      icon: "📇",
      submenu: [
        { name: "Contacts", link: "/contact" },
        { name: "Companies", link: "/companie" },
        { name: "Deals", link: "/deals" },
        { name: "Tickets", link: "/tickets" },
        { name: "Lists", link: "/lists" },
        { name: "Inbox", link: "/inbox" },
        { name: "Calls", link: "/calls" },
        { name: "Tasks", link: "/tasks" },
      ],
    },
    { name: "Marketing", icon: "📢" },
    { name: "Content", icon: "📜" },
    { name: "Commerce", icon: "🛒" },
    { name: "Automations", icon: "🔗" },
    { name: "Reporting", icon: "📊" },
    { name: "Data Management", icon: "🗄️" },
    { name: "Library", icon: "📁" },
    { name: "Breeze", icon: "✨" },
  ];

  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header"></div>

      <SidebarMenu items={menuItems} isCollapsed={isCollapsed} />

      <button
        className="toggle-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? ">" : "<"}
      </button>
    </aside>
  );
}

export default Sidebar;
