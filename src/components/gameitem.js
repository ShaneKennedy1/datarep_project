import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const GameItem = (props) => {
  const handleDelete = (e) => {
    e.preventDefault();

    axios
      .delete("http://localhost:4000/api/game/" + props.mygame._id)
      .then(() => {
        props.Reload();
      })
      .catch((error) => {
        console.error("Error deleting game:", error);
      });
  };

  useEffect(() => {
    console.log("Game Item:", props.mygame);
  }, [props.mygame]);

  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-6 col-lg-4 mb-4">
        <Card className="shadow-sm rounded">
          <Card.Header className="bg-primary text-white text-center">
            <h5>{props.mygame.name}</h5>
          </Card.Header>
          <Card.Body>
            <div className="text-center mb-3">
              <img
                src={props.mygame.cover}
                alt={props.mygame.name}
                className="img-fluid rounded"
                style={{
                  maxWidth: "100%",
                  maxHeight: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
            <blockquote className="blockquote text-center mb-3">
              <footer className="blockquote-footer">
                <b>Release Date:</b> {props.mygame.release}
              </footer>
              <footer className="blockquote-footer">
                <b>Developer:</b> {props.mygame.developer}
              </footer>
              <footer className="blockquote-footer">
                <b>Metacritic Score:</b> {props.mygame.score}
              </footer>
            </blockquote>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between align-items-center">
            <div>
              <Link
                className="btn btn-warning btn-sm"
                to={"/editgame/" + props.mygame._id}
              >
                Update
              </Link>
            </div>
            <div>
              <Button className="btn btn-danger btn-sm" onClick={handleDelete}>
                Delete
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default GameItem;
