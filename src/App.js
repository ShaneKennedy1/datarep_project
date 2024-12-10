import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Readgame from './components/readgame';
import Creategame from './components/creategame';
import Editgame from './components/editgame';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route pointing to Readgame */}
        <Route path="/" element={<Readgame />} />
        <Route path="/readgame" element={<Readgame />} />
        <Route path="/creategame" element={<Creategame />} />
        <Route path="/editgame/:id" element={<Editgame />} />
      </Routes>
    </Router>
  );
}

export default App;
