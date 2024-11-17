import React from "react";
import "./TaskPage.css";
import noTask from "../../../src/assets/taskPage/noTask.png";

function TaskPage() {
  return (
    <div className="task-page">
      {/* Header Section */}
      <div className="task-header">
        <h2>Tasks</h2>
        <p>0 records</p>
      </div>

      {/* Filters Section */}
      <div className="task-filters">
        <div className="task-tabs">
          <button className="task-tab active">All</button>
          <button className="task-tab">Due today</button>
          <button className="task-tab">Overdue</button>
          <button className="task-tab">Upcoming</button>
          <button className="task-tab add-view">+ Add view (4/5)</button>
          <button className="task-tab all-views">All Views</button>
        </div>
        <div className="task-info-bar">
          <p>
            Want to see your tasks on your Google or Outlook calendar?{" "}
            <a href="/settings">Go to settings</a>
          </p>
        </div>
      </div>

      {/* Advanced Filters Section */}
      <div className="task-advanced-filters">
        <input
          type="text"
          placeholder="Search task title"
          className="filter-input"
        />
        <button className="filter-icon">🔍</button>
        <button className="filter-chip">
          (1) Assignee <span className="close-chip">X</span>
        </button>
        <button className="filter-dropdown">Task type</button>
        <button className="filter-dropdown">Due date</button>
        <button className="filter-dropdown">Queue</button>
        <button className="filter-dropdown">More filters</button>
        <button className="filter-edit-columns">Edit columns</button>
        <button className="filter-save">Save view</button>
        <button className="filter-start-tasks disabled">Start 0 tasks</button>
      </div>

      {/* No Tasks Section */}
      <div className="task-results">
        <div className="task-empty">
          <img src={noTask} alt="No tasks" className="empty-image" />
          <h3>You're all caught up on tasks.</h3>
          <p>Nice work.</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
