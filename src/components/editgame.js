import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Edit(props) {
 
  let { id } = useParams();

  
  const [name, setName] = useState('');
  const [release, setRelease] = useState('');
  const [developer, setDeveloper] = useState('');
  const [score, setScore] = useState('');
  const [cover, setCover] = useState('');

 
  const navigate = useNavigate();

 
  useEffect(() => {

    axios.get('http://localhost:4000/api/game/' + id)
      .then((response) => {
      
        setName(response.data.name);
        setRelease(response.data.release);
        setcover(response.data.cover);
        setScore(response.data.score);
        setDeveloper(response.data.developer);
        

      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]); 

  
  const handleSubmit = (event) => {

    
    event.preventDefault();

    
    const newGame = { id, name, release, cover, score, developer };

    
    axios.put('http://localhost:4000/api/game/' + id, newGame)
      .then((res) => {
     
        console.log(res.data);
       
        navigate('/read');
      });
  }

  
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Add Game Name: </label>
                <input type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                />
            </div>
            <div className="form-group">
                <label>Add Release Year: </label>
                <input type="text"
                    className="form-control"
                    value={release}
                    onChange={(e) => { setRelease(e.target.value) }}
                />
            </div>
            <div className="form-group">
                <label>Add Game's Developer: </label>
                <input type="text"
                    className="form-control"
                    value={developer}
                    onChange={(e) => { setDeveloper(e.target.value) }}
                />
            </div>
            <div className="form-group">
                <label>Add Metacritic Score: </label>
                <input type="text"
                    className="form-control"
                    value={score}
                    onChange={(e) => { setScore(e.target.value) }}
                />
            </div>
            <div className="form-group">
                <label>Add Cover Art : </label>
                <input type="text"
                    className="form-control"
                    value={cover}
                    onChange={(e) => { setCover(e.target.value) }}
                />
            </div>
            <div>
                <input type="submit" value="Add Game"></input>
            </div>
        </form>
    </div>
);
}
