import "../components/Header.css";

function Header() {
  return (
    <header>
      <h1>KANZU POLICE FORCE</h1>
      <h3>
        <em>Code Protect and Serve</em>
      </h3>

      <div className="flag">
        <span className="black"></span>
        <span className="yellow"></span>
        <span className="red"></span>
      </div>
    </header>
  );
}

export default Header;
