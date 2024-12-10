import axios from "axios";
import { useState, useEffect } from "react";
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
        <div>           
            <h2>Game Database</h2>
            <Games myGames={data} ReloadData={Reload} />
        </div>
    );
}

export default Readgame;
