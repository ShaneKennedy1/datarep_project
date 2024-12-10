import axios from "axios";
import { useState } from "react";

const Creategame = () => {

    const [name, setName] = useState('');
    const [release, setRelease] = useState('');
    const [developer, setDeveloper] = useState('');
    const [score, setScore] = useState('');
    const [cover, setCover] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const game = {name,release,developer,score,cover};
        console.log(game);
        axios.post('http://localhost:4000/api/games',game)
        .then((res)=>{console.log(res.data)})
        .catch();
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
export default Creategame;