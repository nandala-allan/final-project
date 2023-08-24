import LoginButton from "./components/LoginButton";
// import LogOutButton from "./components/LogOutbutton";
// import Home from "./components/Home";

import "./App.css";
// import { useAuth0 } from "@auth0/auth0-react";
function App() {
  // const { isAuthenticated } = useAuth0();

  return (
    <>
      <main className="column">
        <div>
          <h2 className="font-bold text-3xl text-white">Kanzu Police Force</h2>
          <p className="text-md text-white text-center">
            Code Protect and Serve
          </p>
        </div>
        <img id="splash" src="../Kanzu Police.png" />
        <div className="home-cards">
          <div className="info">
            <h2 className="font-bold text-2xl">Vision</h2>
            <p className="text-lg">
              A Professional and People Centered Police for a Safe and Secure
              Society.
            </p>
          </div>
          <div className="info">
            <h2 className="font-bold text-2xl">Mission</h2>
            <p className="text-lg">
              To Secure Life and Property in Partnership with the Public in a
              Committed and Professional Manner in order to Promote Sustainable
              Development
            </p>
          </div>
        </div>
        <div className="btn">
          <LoginButton />
        </div>

        {/* {isAuthenticated && ( */}
        {/* <div><Home /></div> */}
        {/* // )}  */}
      </main>
    </>
  );
}

export default App;
