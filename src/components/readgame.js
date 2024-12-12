import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import Games from "./games";

function Readgame() {
  // Initialize state variables for game data and search term
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 

  // Function to fetch game data from the API
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

  // UseEffect to fetch data when the component mounts
  useEffect(() => {
    Reload();
  }, []); 

  // Filter the games based on the search term entered by the user
  const filteredGames = data.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-center py-4">
      <h1 className="display-4 mb-4 text-primary">🎮 Game Database 🎮</h1>
      {/* Search input field */}
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
