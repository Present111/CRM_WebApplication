import React, { useState } from "react";
import Sidebar from "./components/CRM/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"; // Đảm bảo CSS được import
import ContactPage from "./pages/ContactPage/ContactPage";
import CompanyPage from "./pages/CompaniesPage/CompaniesPage";
import DealPage from "./pages/DealPage/DealPage";
import TicketPage from "./pages/TicketPage/TicketPage";
import ListPage from "./pages/ListPage/ListPage";
import InboxPage from "./pages/InboxPage/InboxPage";
import CallPage from "./pages/CallPage/CallPage";
import TaskPage from "./pages/TaskPage/TaskPage";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Router>
      {/* Bọc toàn bộ ứng dụng trong Router */}
      <div className={`app ${isCollapsed ? "collapsed" : ""}`}>
        <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        <div className="main-wrapper">
          <Header isCollapsed={isCollapsed} />
          <main className="main-content">
            <Routes>
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/companie" element={<CompanyPage />} />
              <Route path="/deals" element={<DealPage />} />
              <Route path="/tickets" element={<TicketPage />} />
              <Route path="/lists" element={<ListPage />} />
              <Route path="/inbox" element={<InboxPage />} />
              <Route path="/calls" element={<CallPage />} />
              <Route path="/tasks" element={<TaskPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
