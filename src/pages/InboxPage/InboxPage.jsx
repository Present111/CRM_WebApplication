import React, { useState } from "react";
import "./InboxPage.css";
import teamEmail from "../../assets/inboxPage/teamEmail.png";
import chat from "../../assets/inboxPage/chat.png";
import form from "../../assets/inboxPage/form.png";
import messenger from "../../assets/inboxPage/messenger.png";
import whatsapp from "../../assets/inboxPage/whatsapp.png";
import calling from "../../assets/inboxPage/calling.png";

function InboxPage() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isLessExpanded, setIsLessExpanded] = useState(false);
  return (
    <div className="inbox-page">
      {/* Sidebar */}
      <div className={`inbox-sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
        <div className="inbox-header">
          <div className="inbox-header-left">
            {/* Toggle Button */}
            <button
              className="back-icon"
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            >
              {isSidebarCollapsed ? "»" : "«"}
            </button>
            {!isSidebarCollapsed && <h2>Inbox</h2>}
          </div>
          <div className="inbox-header-right">
            <span className="search-icon">🔍</span>
          </div>
        </div>

        {!isSidebarCollapsed && (
          <>
            <ul className="sidebar-list">
              <li>
                Unassigned <span>0</span>
              </li>
              <li>
                Assigned to me <span>0</span>
              </li>
              <li>
                All open <span>0</span>
              </li>
              <li
                className="less-item"
                onClick={() => setIsLessExpanded(!isLessExpanded)}
              >
                {isLessExpanded ? "Less" : "More"}{" "}
                {/* Tên hiển thị thay đổi theo trạng thái */}
                <span className="toggle-icon">
                  {isLessExpanded ? "▲" : "▼"}{" "}
                  {/* Biểu tượng thay đổi theo trạng thái */}
                </span>
              </li>
              {isLessExpanded && (
                <>
                  <li>
                    Email <span>0</span>
                  </li>
                  <li>
                    Calls <span>0</span>
                  </li>
                  <li>
                    All closed <span>0</span>
                  </li>
                  <li>Sent</li>
                  <li>Spam</li>
                  <li>Trash</li>
                </>
              )}
            </ul>
            <div className="sidebar-actions">
              <button>Actions</button>
              <button>Inbox Settings</button>
            </div>
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="inbox-main">
        <h1>Say hello.</h1>
        <p>
          Connect your first channel and start bringing conversations to your
          inbox.
        </p>
        <div className="inbox-cards">
          <div className="card">
            <img src={teamEmail} alt="Team Email" />
            <h3>Team email</h3>
            <p>Manage and respond to team emails from your inbox</p>
          </div>
          <div className="card">
            <img src={chat} alt="Chat" />
            <h3>Chat</h3>
            <p>Connect live chat and create chatbots to engage with visitors</p>
          </div>
          <div className="card">
            <img src={form} alt="Forms" />
            <h3>Forms</h3>
            <p>Connect and respond to forms from your inbox</p>
          </div>
          <div className="card">
            <img src={messenger} alt="Facebook Messenger" />
            <h3>Facebook Messenger</h3>
            <p>Start receiving Messenger conversations</p>
          </div>
          <div className="card">
            <img src={whatsapp} alt="WhatsApp" />
            <h3>WhatsApp</h3>
            <p>Start receiving WhatsApp conversations in your inbox</p>
          </div>
          <div className="card">
            <img src={calling} alt="Calling" />
            <h3>Calling</h3>
            <p>Start making and receiving calls in your inbox</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InboxPage;
