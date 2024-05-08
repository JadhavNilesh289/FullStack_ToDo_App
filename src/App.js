import AddToDo from './Components/Addtodo';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <AddToDo />
        <Footer />
      </div>
    </>
  );
}

export default App;
