import React, { useState } from "react";
import { Form, Nav } from "react-bootstrap";

const Sidebar = ({ onSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    if (newQuery) {
      fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${newQuery}`
      )
        .then((response) => response.json())
        .then((data) => {
          onSearchResults(data.data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    } else {
      onSearchResults([]);
    }
  };

  return (
    <div className="bg-secondary text-white vh-100 p-3 d-none d-lg-block z-1 border-end border-1 border-light">
      <h4>
        <i className="bi bi-apple text-light"></i> Music
      </h4>
      <Form.Control
        type="text"
        placeholder="Cerca..."
        className="mb-4 text-light"
        style={{ backgroundColor: "#2b2b2c" }}
        value={query}
        onChange={handleSearchChange}
      />
      <Nav className="flex-column mt-4">
        <Nav.Link href="#" className="text-white">
          <i className="bi bi-house-fill"></i>Home
        </Nav.Link>
        <Nav.Link href="#" className="text-white">
          <i className="bi bi-grid"></i> Novità
        </Nav.Link>
        <Nav.Link href="#" className="text-white">
          <i className="bi bi-broadcast-pin"></i>Radio
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
