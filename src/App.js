import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddTodo from './Components/Addtodo'; // Use PascalCase for components
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Errorpage from './Components/Errorpage';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          {/* Use exact path for Home to avoid matching all paths */}
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Errorpage />} />
          <Route path="/addtodo" element={<AddTodo />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
        <Footer />
      </Router>


    </>
  );
}

export default App;
