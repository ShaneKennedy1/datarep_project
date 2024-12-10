import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";  // Import useNavigate

const Creategame = () => {
  const [name, setName] = useState("");
  const [release, setRelease] = useState("");
  const [developer, setDeveloper] = useState("");
  const [score, setScore] = useState("");
  const [cover, setCover] = useState("");
  const navigate = useNavigate();  // Hook to navigate programmatically

  const handleSubmit = (e) => {
    e.preventDefault();
    const game = { name, release, developer, score, cover };
    console.log(game);
    axios
      .post("http://localhost:4000/api/games", game)
      .then((res) => {
        console.log(res.data);
        // Navigate to Readgame after successful game creation
        navigate("/readgame");
      })
      .catch((err) => {
        console.error("Error creating game:", err);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Create a New Game</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Add Game Name:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter game name"
            />
          </div>
          <div className="form-group mb-3">
            <label>Add Release Year:</label>
            <input
              type="text"
              className="form-control"
              value={release}
              onChange={(e) => setRelease(e.target.value)}
              placeholder="Enter release year"
            />
          </div>
          <div className="form-group mb-3">
            <label>Add Game's Developer:</label>
            <input
              type="text"
              className="form-control"
              value={developer}
              onChange={(e) => setDeveloper(e.target.value)}
              placeholder="Enter developer name"
            />
          </div>
          <div className="form-group mb-3">
            <label>Add Metacritic Score:</label>
            <input
              type="text"
              className="form-control"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              placeholder="Enter Metacritic score"
            />
          </div>
          <div className="form-group mb-3">
            <label>Add Cover Art URL:</label>
            <input
              type="text"
              className="form-control"
              value={cover}
              onChange={(e) => setCover(e.target.value)}
              placeholder="Enter cover art URL"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary w-100">
              Add Game
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Creategame;
