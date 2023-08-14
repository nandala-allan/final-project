import "../components/Home.css";

function App() {
  return (
    <>
      <h1>Welcome to Kazu Police Force</h1>
      <div className="cards">
        <div className="card-info">
          <h2>New Form</h2>
          <p>Make a complaint about a crime</p>
          <button type="submit">Generate New</button>
        </div>

        <div className="card-info">
          <h2>Search Form</h2>
          <p>Search for a complaint form</p>
          <button type="submit">Search</button>
        </div>
      </div>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          inventore ullam necessitatibus labore fugiat velit, quaerat nisi optio
          odit voluptatibus aliquam nemo id rem, blanditiis nam delectus amet.
          Optio, officiis.
        </p>
      </div>
    </>
  );
}

export default App;
