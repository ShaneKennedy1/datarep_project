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
        setCover(response.data.cover);
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
        navigate('/readgame');
      });
  }

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card p-4 shadow-lg w-50">
        <h2 className="text-center mb-4">Edit Game</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="name">Game Name:</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="release">Release Year:</label>
            <input
              type="text"
              id="release"
              className="form-control"
              value={release}
              onChange={(e) => setRelease(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="developer">Game Developer:</label>
            <input
              type="text"
              id="developer"
              className="form-control"
              value={developer}
              onChange={(e) => setDeveloper(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="score">Metacritic Score:</label>
            <input
              type="text"
              id="score"
              className="form-control"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="cover">Cover Art URL:</label>
            <input
              type="text"
              id="cover"
              className="form-control"
              value={cover}
              onChange={(e) => setCover(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary w-100">Update Game</button>
          </div>
        </form>
      </div>
    </div>
  );
}
