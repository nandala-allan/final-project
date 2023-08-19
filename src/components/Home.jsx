import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "../components/Home.css";
import Footer from "./Footer";
// import Search from "./Search";
// import { func } from "prop-types";
function Home() {
  let redirect = useNavigate();

  function form() {
    redirect("/form");
  }
  function naviget() {
    redirect("/SearchForm");
  }
  return (
    <>
      <Header />
      <div className="home">
        <h1>Welcome to Kanzu Police Force</h1>
        <div className="cards">
          <div className="card-info">
            <h2>Register New Case</h2>
            <p>Make a complaint about a crime</p>
            <button type="submit" onClick={form}>
              Generate New Case Form
            </button>
          </div>

          <div className="card-info">
            <h2>Search For Case</h2>
            <p>Search for a complaint form</p>
            <button type="submit" onClick={naviget}>
              Search
            </button>
          </div>
        </div>
        <div className="content">
          <p>
            The mandate of Kanzu Police Force as provided in the Constitution of
            the Republic of KANZU, and KANZU Police Force Act Cap 303, is
            protection of life and property, prevention and detection of crime,
            keeping law and order, and maintenance of overall Security and
            Public Safety in Kanzu.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
