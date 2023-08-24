// import { useAuth0 } from "@auth0/auth0-react";

// export default function LoginButton() {
//   const { loginWithRedirect, isAuthenticated } = useAuth0();

//   return(
//       !isAuthenticated && (

//       <button
//         className="bg-blue-500 px-4 py-3 font-medium uppercase text-sm text-white"
//         onClick={() => loginWithRedirect()}
//       >
//         Sing In
//       </button>
//     )

//   );
// }

import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  const { loginWithRedirect, isAuthenticated, error } = useAuth0();
  console.log(error?.message);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (!isAuthenticated) {
      loginWithRedirect();
    } else {
      navigate("/Home");
    }
  };

  return (
    !isAuthenticated && (
      <button
        className="bg-blue-500 px-4 py-3 font-medium uppercase text-sm text-white"
        onClick={handleLoginClick}
      >
        Sign In
      </button>
    )
  );
}
