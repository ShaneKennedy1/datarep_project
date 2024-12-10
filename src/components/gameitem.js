import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import axios from "axios";

const GameItem = (props) => {


  const handleDelete = (e) => {
    e.preventDefault(); 
    
    axios.delete('http://localhost:4000/api/game/' + props.mygame._id)
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
    <div>
      <Card>
        <Card.Header>{props.mygame.name}</Card.Header>
        <Card.Body>   
          <blockquote className="blockquote mb-0">
            <img src={props.mygame.cover} alt={props.mygame.name} /> 
            <footer><b>Release Date: </b> {props.mygame.release}</footer>
            <footer><b>Developer: </b> {props.mygame.developer}</footer>
            <footer><b>Metacritic Score: </b> {props.mygame.score}</footer>
          </blockquote>
        </Card.Body>
        <Link className="btn btn-primary" to={"/editgame/" + props.mygame._id}>Update</Link>
        <Button className="btn btn-danger" onClick={handleDelete}>Delete</Button>
      </Card>
    </div>
  );
}
export default GameItem;
