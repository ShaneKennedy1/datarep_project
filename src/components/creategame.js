import axios from "axios";
import { useState } from "react";

const Create = () => {

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
            <h3>Hello from create component!</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Game Name: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Movie Year: </label>
                    <input type="text"
                        className="form-control"
                        value={year}
                        onChange={(e) => { setYear(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Movie Poster: </label>
                    <input type="text"
                        className="form-control"
                        value={poster}
                        onChange={(e) => { setPoster(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Movie"></input>
                </div>
            </form>
        </div>
    );
}
export default Create;