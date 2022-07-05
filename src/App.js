import "./styles/app.scss";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="logo">
          <span className="logo-animation">JC</span>
          <div className="logo-fullname">
            <span>JOYFUL</span>
            <span>CLOUD</span>
          </div>
        </div>
        <div className="navbar">
          <nav>
            <ul>
              <li>JOYFUL</li>
              <li>CLOUD</li>
              <li>LAMA</li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="content">
        <div className="main">
          <div className="left-block">
            <h1>SUPPORT</h1>
            <span>LAMA NOW</span>
            <p>Funny site about llamas</p>
            <button>Donate</button>
          </div>
          <div className="right-block">
            <img
              width={400}
              height="auto"
              src="./assets/img/lama-icon.png"
              alt="lama"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
