import './App.css';

function App() {
  return (
    <div className='body'>
    <div className='photo'>
        <div className="title">
            <h1>Photo</h1>
        </div>
        <br></br>
        <div>click "Change Photo" button to view another photo.
            <br></br>
            <br></br>
            <div className="old">
            <img src="/images/itsme.jpg" alt="oldpic" />
            </div>
        </div>
            <br></br>
        <div className="btn">Change Photo</div>
      </div>
      
      </div>
  );
}

export default App;
