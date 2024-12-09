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
        <Card.Header>{props.game.name}</Card.Header>
        <Card.Body>   
          <blockquote className="blockquote mb-0">
            <img src={props.mygame.cover} alt={props.mygame.name} /> 
            <footer>{props.mygame.release}</footer>
          </blockquote>
        </Card.Body>
        <Link className="btn btn-primary" to={"/edit/" + props.mygame._id}>Update</Link>
        <Button className="btn btn-danger" onClick={handleDelete}>Delete</Button>
      </Card>
    </div>
  );
}
export default GameItem;
