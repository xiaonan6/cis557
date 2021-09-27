import './index.css';
import image1 from "./image1.jpeg";

function App() {
  return (
    <div className="App">

        <div class="text1"> 
            <p>
              Welcome to the website for CIS557 workshop2
            </p>
        </div>

        <div class="image1"> 
          <img src={image1} alt="welcome" /> 
        </div>

    </div>
    
  );
}

export default App;
