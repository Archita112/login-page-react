// import logo from './logo.svg';
import illustration from './illustration.svg'
import './App.css';

function App() {
  return (
  <div className="main">
    <div className="main-div">
        <div className="img">
          <img src={illustration} alt="Myimage"></img>
        </div>
        <div className="elements">
          <div className="input-div">
          {/* <p className="mail">Email</p> */}
          {/* <label className="mail"></label> */}
          <input
          className="mail"
          type="email"
          placeholder="email"
          />
          {/* <p className="pass">password</p> */}
          {/* <label className="pass"></label> */}
          <input
          className="pass"
          type="password"
          placeholder="password"
          />
          </div>
          <div className="buttons">
          <button>Sign up</button>
          <button>Log in</button>
          </div>
        </div>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
    </div>
  </div>
  );
}

export default App;
