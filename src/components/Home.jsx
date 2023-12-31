import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "../components/Home.css";
import Footer from "./Footer";
// import Search from "./Search";
// import { func } from "prop-types";
function Home() {
  let navigate = useNavigate();

  const routeToFormPage = () => navigate("/form");

  const routeToSearchForm = () => navigate("/SearchForm");

  return (
    <>
      <Header />
      <div className="home">
        <div className="img">
          <img src="../Kanzu Police.png" />
          <h1 className="font-medium text-2xl">
            Welcome to Kanzu Police Force
          </h1>
        </div>

        <div className="cards">
          <div className="card-info">
            <h2 className="font-bold text-2xl">Register New Case</h2>
            <p className="text-lg">Make a complaint about a crime</p>
            <button
              className="bg-blue-500 px-4 py-3 font-medium uppercase text-sm"
              // type="submit"
              onClick={() => routeToFormPage()}
            >
              Generate New Case Form
            </button>
          </div>

          <div className="card-info">
            <h2 className="font-bold text-2xl">Search For Case</h2>
            <p className="text-lg">Search for a case form</p>
            <button
              className="px-4 py-3 font-medium uppercase text-sm bg-blue-500"
              // type="submit"
              onClick={() => routeToSearchForm()}
            >
              Search
            </button>
          </div>
        </div>
        {/* <div className="content">
          <p>
            The mandate of Kanzu Police Force as provided in the Constitution of
            the Republic of KANZU, and KANZU Police Force Act Cap 303, is
            protection of life and property, prevention and detection of crime,
            keeping law and order, and maintenance of overall Security and
            Public Safety in Kanzu.
          </p>
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default Home;
