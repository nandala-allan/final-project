import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
      !isAuthenticated && (
      
      <button
        className="bg-blue-500 px-4 py-3 font-medium uppercase text-sm text-white"
        onClick={() => loginWithRedirect()}
      >
        Sing In
      </button>
    )
 
     
  
  );
}
