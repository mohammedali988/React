import './App.css';
import Comment from './CommentDetails';
import faker from "faker";
import Approval from './Approval';

function App() {
  
  return (
    <div className = " ui container comments">
      <Approval>
        <Comment
          author ="Sam"
          time="Today at 7:00pm"
          comment = "Nice blog"
          img={faker.image.avatar()} 
        />
      </Approval>
      <Approval>
        <Comment 
          author ="Memo"
          time="Today at 9:00 Am" 
          comment="Hi there" 
          img={faker.image.avatar()} 
        />
      </Approval>
      <Approval>
        <Comment 
          author = "Alex" 
          time="Satarday at 11:00 pm" 
          comment="Beatifull" 
          img={faker.image.avatar()} 
        />
      </Approval>
    </div>
  );
}

export default App;
