import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navigationbar.js';


function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
    
      </Routes>
    
    </Router>
  );
}

export default App;