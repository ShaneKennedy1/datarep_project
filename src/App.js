import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Readgame from './components/readgame';
import Creategame from './components/creategame';
import Editgame from './components/editgame';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/read" element={<Readgame />} />
        <Route path="/create" element={<Creategame />} />
        <Route path="/edit/:id" element={<Editgame />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;