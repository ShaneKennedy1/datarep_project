import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Readgame from './components/readgame';
import Creategame from './components/creategame';
import Editgame from './components/editgame';

function App() {
  return (
    <Router>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/readgame" element={<Readgame />} />
        <Route path="/creategame" element={<Creategame />} />
        <Route path="/editgame/:id" element={<Editgame />}/>
      </Routes>
    </Router>
  );
}

export default App;