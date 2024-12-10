import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // Import Link for navigation
import Games from "./games";

function Readgame() {
    
    const [data, setData] = useState([]);

    const Reload = () => {
        console.log("Reloading game data..."); 
        axios.get('http://localhost:4000/api/games')
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

    return (
        <div className="text-center py-4">
            <h1 className="display-4 mb-4 text-primary">🎮 Game Database 🎮</h1>
            <Link to="/creategame"> 
                <button className="btn btn-success btn-lg mb-4 px-5 py-2" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                    + Add Game
                </button>
            </Link>
            <Games myGames={data} ReloadData={Reload} />
        </div>
    );
}

export default Readgame;
