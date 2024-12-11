import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Games from "./games";

function Readgame() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  // Function to fetch game data
  const Reload = () => {
    console.log("Reloading game data...");
    axios
      .get("http://localhost:4000/api/games")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error reloading data:", error);
      });
  };

  useEffect(() => {
    Reload();
  }, []);

  // Filtered games based on the search term
  const filteredGames = data.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-center py-4">
      <h1 className="display-4 mb-4 text-primary">🎮 Game Database 🎮</h1>

      <div className="mb-4">
        <input
          type="text"
          className="form-control w-50 mx-auto"
          style={{
            padding: "12px 20px",
            fontSize: "1.1rem",
            border: "2px solid #28a745",
            borderRadius: "25px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
          placeholder="🔍 Search for a game..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Link to="/creategame">
        <button
          className="btn btn-success btn-lg mb-4 px-5 py-2"
          style={{ fontSize: "1.25rem", fontWeight: "bold" }}
        >
          + Add Game
        </button>
      </Link>

      <Games myGames={filteredGames} ReloadData={Reload} />
    </div>
  );
}

export default Readgame;
