// import LoginButton from "./components/LoginButton";
// import LogOutButton from "./components/LogOutbutton";
import Home from "./components/Home";
import "./App.css";
// import { useAuth0 } from "@auth0/auth0-react";
function App() {
  // const { isAuthenticated } = useAuth0();

  return (
    <main className="column">
      {/* <div className="btn"> */}
      {/* <LoginButton /> */}
      {/* </div> */}

      {/* {isAuthenticated && ( */}
      {/* <div> */}
      <Home />
      {/* </div> */}
      {/* )} */}
    </main>
  );
}

export default App;
