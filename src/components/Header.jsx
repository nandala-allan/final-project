import "../components/Header.css";

function Header() {
  return (
    <header>
      <h1>KANZU POLICE FORCE</h1>
      <p>Code Protect and Serve</p>

      <div className="flag">
        <span className="black"></span>
        <span className="yellow"></span>
        <span className="red"></span>
      </div>
    </header>
  );
}

export default Header;
