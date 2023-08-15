import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "../components/Home.css";
import Footer from "./Footer";
import Search from "./Search";
import { func } from "prop-types";
function Home() {
  let redirect = useNavigate();

  function form() {
    redirect("/form");
  }
  function search() {
    redirect("./Search");
  }

  return (
    <>
      <Header />
      <h1>Welcome to Kazu Police Force</h1>
      <div className="cards">
        <div className="card-info">
          <h2>New Form</h2>
          <p>Make a complaint about a crime</p>
          <button type="submit" onClick={form}>
            Generate New
          </button>
        </div>

        <div className="card-info">
          <h2>Search Form</h2>
          <p>Search for a complaint form</p>
          <button type="submit" onClick={search}>
            Search
          </button>
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
      <Footer />
    </>
  );
}

export default Home;
