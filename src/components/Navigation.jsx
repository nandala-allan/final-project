import { Routes, Route } from "react-router-dom";
// import LogOutButton from "./components/LogOutbutton";
import Home from "../components/Home";
import SearchForm from "../components/SearchForm";
import Form from "../components/Form";
import App from "../App";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" exact={true} element={<App />} />
      <Route path="/home" exact={true} element={<Home />} />
      <Route path="/form" exact={true} element={<Form />} />
      <Route path="/searchForm" exact={true} element={<SearchForm />} />
    </Routes>
  );
};

export default Navigation;
