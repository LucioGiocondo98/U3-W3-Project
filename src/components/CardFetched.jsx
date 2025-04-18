import React, { useState, useEffect } from "react";
import CardCustom from "./CardCustom";
import { Row, Col, Spinner } from "react-bootstrap";

const CardFetched = ({ albums }) => {
  const [loading, setLoading] = useState(true);
  const visibleAlbums = albums.slice(0, 12);

  useEffect(() => {
    if (albums.length > 0) {
      setLoading(false);
      console.log("Albums in CardFetched:", albums);
    }
  }, [albums]);

  return (
    <Row>
      <h4 className="text-light">Nuove uscite</h4>
      {loading ? (
        <Col className="text-center mt-5">
          <Spinner animation="border" variant="light" />
        </Col>
      ) : visibleAlbums.length > 0 ? (
        visibleAlbums.map((album, index) => (
          <Col xs={4} lg={2} key={album.id}>
            {index < 6 ? (
              <CardCustom
                title={album.title}
                image={album.album.cover}
                artist={album.artist.name}
              />
            ) : null}
          </Col>
        ))
      ) : (
        <Col className="text-center mt-5">
          <p className="text-white">Nessun album trovato.</p>
        </Col>
      )}
    </Row>
  );
};

export default CardFetched;
