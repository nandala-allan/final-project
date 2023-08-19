import "../components/Header.css";

function Header() {
  return (
    <header>
      <div className="nav">
        <img src="../public/Kanzu Police.png" />
        <div>
          <h1>KANZU POLICE FORCE</h1>
          <p>Code Protect and Serve</p>
        </div>
        <img src="../public/Kanzu Police.png" />
      </div>

      <div className="flag">
        <span className="black"></span>
        <span className="yellow"></span>
        <span className="red"></span>
      </div>
    </header>
  );
}

export default Header;
