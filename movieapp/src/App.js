import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import TopRate from './pages/TopRate';
import Romance from './pages/Romance';
import Action from './pages/Action';
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movie/:id' element={<Detail/>} />
        <Route path='/toprate' element={<TopRate/>} />
        <Route path='/Romance' element={<Romance/>} />
        <Route path='/Action' element={<Action/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;