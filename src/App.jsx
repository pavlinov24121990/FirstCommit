import './React';
import './HardReset.css';
import './Fonts.css';
import './App.css';

function App() {




  return (
    <div className="App">
      <div className="Main">
        <div className="MainContent">
          <h1>NoT Only Flowers</h1>
          <h2>In Love</h2>
          <input className="MainContentInput" placeholder="Write an email" type="email" />
          <input placeholder="Write password" type="pass" />
          <button>Log in</button>
          <a href="#">Forgot account ?</a>
          <span className="MainSpan">
            or
          </span>
          <button>Create a new account</button>
        </div>
      </div>
    </div>
  );
}

export default App;
