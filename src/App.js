import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-700 w-full h-full ">
      <Navbar/>
      <Content/>
      <Footer/>    
    </div>
  );
}

export default App;
