import React, { useState } from "react";
//import './EventDashboard.css';

const eventList = [
  {
    name: "Cloud Innovation Summit",
    date: "2024-10-15",
    speaker: "Jane Doe",
    status: "Completed",
  },
  {
    name: "Blockchain Revolution Conference",
    date: "2024-11-05",
    speaker: "Dr. Peter Smith",
    status: "In Progress",
  },
  {
    name: "AI in Healthcare Symposium",
    date: "2024-12-01",
    speaker: "Dr. Aisha Malik",
    status: "Completed",
  },
  {
    name: "Future of Fintech Forum",
    date: "2024-10-25",
    speaker: "John Lee",
    status: "Completed",
  },
  {
    name: "Data Analytics in Business",
    date: "2024-11-12",
    speaker: "Rachel Moore",
    status: "Completed",
  },
  {
    name: "Sustainable Energy Expo",
    date: "2024-09-28",
    speaker: "Prof. Alan Green",
    status: "Completed",
  },
  {
    name: "Web3 Interfaces Workshop",
    date: "2024-10-10",
    speaker: "Kevin Adams",
    status: "In Progress",
  },
  {
    name: "Cybersecurity for Startups",
    date: "2024-11-19",
    speaker: "Emily Zhang",
    status: "Completed",
  },
  {
    name: "Smart Cities Forum",
    date: "2024-10-18",
    speaker: "Dr. Maria Hernandez",
    status: "In Progress",
  },
  {
    name: "Tech Safari Mixer",
    date: "2024-09-30",
    speaker: "Guest Panel",
    status: "In Progress",
  },
];

function EventDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("Most Recent");
  const [rowsToShow, setRowsToShow] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredEvents = eventList
    .filter((event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "Most Recent") {
        return new Date(b.date) - new Date(a.date);
      }
      return 0;
    });

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleSortChange = (e) => setSortOption(e.target.value);
  const handleRowsChange = (e) => setRowsToShow(Number(e.target.value));
  const totalPages = Math.ceil(filteredEvents.length / rowsToShow);

  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * rowsToShow,
    currentPage * rowsToShow
  );

  return (
    <div className="event-dashboard">
      <div className="toolbar mobilefac">
        <div className="left-toolbar mobilefac">
          <div className="field">
            <div className="base-field">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-bar"
              />
            </div>
          </div>
          <select
            className="sort-dropdown"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="date">Date</option>
            {/* Add more sorting options as needed */}
          </select>
          <select
            className="sort-dropdown"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="Status">Status</option>
            {/* Add more sorting options as needed */}
          </select>
          <select
            className="sort-dropdown"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="Name">Name</option>
            {/* Add more sorting options as needed */}
          </select>
          <h4>Displaying a 100 results</h4>
        </div>
        <div className="right-toolbar mobile fac">
          <div className="fac sort-col">
            <p>sort:</p>
            <select
              className="sort-dropdown"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="Most Recent">Most Recent</option>
              {/* Add more sorting options as needed */}
            </select>
          </div>
          <button className="export-btn">Export</button>
        </div>
      </div>

      <div className="base-data-table">
        <div className="table-header">
          <div className="header-row">Event Name</div>
          <div className="header-row mobilehide">Date</div>
          <div className="header-row mobilehide">Speaker</div>
          <div className="header-row">Status</div>
        </div>
        <div className="table-grid">
          {paginatedEvents.map((event, index) => (
            <div key={index} className="table-row">
              <div>{event.name}</div>
              <span>{event.date}</span>
              <span>{event.speaker}</span>
              <span>{event.status}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pagination">
        <span>Displaying {filteredEvents.length} results</span>
        <select
          value={rowsToShow}
          onChange={handleRowsChange}
          className="rows-select"
        >
          <option value={10}>10 rows</option>
          <option value={20}>20 rows</option>
          <option value={50}>50 rows</option>
        </select>
        <div className="pagination-controls">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`pagination-btn ${
                currentPage === i + 1 ? "active" : ""
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventDashboard;
