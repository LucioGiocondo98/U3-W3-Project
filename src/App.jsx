import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "./components/MyNavbar";
import Sidebar from "./components/Sidebar";
import CardFetched from "./components/CardFetched";
import Novità from "./components/Novità";
import NuoviEpisodiRadio from "./components/Nuovi EpisodiRadio";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import AppleFooter from "./components/AppleFooter";

const App = function () {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="bg-dark">
      <Container fluid className="p-0">
        <Row className="mx-auto">
          <Col sm={2} className="d-none d-lg-block">
            <Sidebar onSearchResults={handleSearchResults} />
          </Col>
          <Col sm={12} lg={10} className="bg-dark">
            <MyNavbar />
            <Novità />
            <NuoviEpisodiRadio />
            <h3 className="text-center mb-4">Risultati della ricerca</h3>
            <CardFetched albums={searchResults} />
            <Footer />
            <AppleFooter />
            <MusicPlayer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
