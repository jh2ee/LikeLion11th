import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import TopRate from './pages/TopRate';
import NowPlaing from './pages/NowPlaying';
import UpComming from './pages/UpComming';
import Detail from "./pages/Detail";


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movie/:id' element={<Detail/>} />
        <Route path='/toprate' element={<TopRate/>} />
        <Route path='/nowplaying' element={<NowPlaing/>} />
        <Route path='/upcomming' element={<UpComming/>} />
      </Routes>
    </Router>
  )
}

export default App;

// movie id로 페이지 링크 따오기..?
// <Route path='/movie/:id' element={<Detail/>} />