import './App.css';
import Create from './compo/Create';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Display from './compo/Display';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Create/>}/>
          <Route exact path='/display' element={<Display />}/>
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;
