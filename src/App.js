import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddTodo from './Components/Addtodo'; // Use PascalCase for components
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Errorpage from './Components/Errorpage';
import Alltodo from './Components/Alltodo';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <div className='flex  border-black gap-5 m-5'>
          <Sidebar />
          <div className='p-2'>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/home" element={<Errorpage />} />
              <Route path="/addtodo" element={<AddTodo />} />
              <Route path="/about" element={<About />} />
              <Route path='/alltodo' element={<Alltodo />} />
            </Routes>
          </div>
        </div>

        <Footer />
      </Router>


    </>
  );
}

export default App;
