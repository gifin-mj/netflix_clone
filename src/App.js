import './App.css'
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Rowposter from './components/Rowposter/Rowposter';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowposter/>
    </div>
  );
}

export default App;


