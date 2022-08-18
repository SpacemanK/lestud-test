
import './App.scss';
import Header from './components/Header';
import Results from './components/Results';
import Search from './components/Search';
import {useState} from "react";

function App() {

  const [images, setImages] = useState([]);

  return (

    <div className="App">
      <Header></Header>
      <div className="main">
      
        <div className="left-main">
          <Search images={images} setimages={setImages}></Search>
        </div>

        <div className="right-main">
          <Results images={images}></Results>
        </div>

      </div>
     
      
    </div>

  );
}

export default App;
