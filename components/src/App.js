import './App.css';
import faker from "faker";

function App() {
  return (
    <div className = " ui container comments">
      <div className="comment"> 
        <a href="/" className="avatar">
          <img alt="avatar" src ={faker.image.avatar()}/>
        </a>
        <div className="content">
          <a href="/" className="author" >
            Sam 
          </a>
          <div className="metadata">
            <span className="data" >Today at 6:00 pm </span>
          </div>
          <div className="text"> Nice plog post </div>
        </div>
      </div>
    </div>
  );
}

export default App;
