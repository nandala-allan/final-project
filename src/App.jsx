// import './App.css'
import LoginButton from "./components/LoginButton";
import LogOutButton from "./components/LogOutbutton";
import Home from "./components/Home";
// import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const {isAuthenticated, isLoading } = useAuth0();
  
  return (
    <main className="column">
     {/* <h1>Auth0 Login</h1> */}
   
     <LoginButton/> <LogOutButton/>
     {isAuthenticated && ( 
        <article>
          <Home />
        </article>
      )}
   
    
    </main>
  );
}

export default App;
