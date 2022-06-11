import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App max-w-7xl p-10 mx-auto">

      <div className='sticky top-0 z-50'>
        <Navbar></Navbar>
      </div>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/projects/:index' element={<ProjectDetails></ProjectDetails>}></Route>
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
