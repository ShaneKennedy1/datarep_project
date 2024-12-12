import GameItem from "./gameitem";

const Games = (props) => {
    // Map through the array of games and render a GameItem component for each game
    return props.myGames.map(
        (game) => {    
            // Pass game data and ReloadData function as props to GameItem
            return <GameItem mygame={game} key={game._id} Reload={props.ReloadData} />;
        }
    );
}

export default Games;
