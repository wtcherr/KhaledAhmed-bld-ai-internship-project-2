import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import {
  useSearchParams,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/" className="logo">
        <img
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          alt="Udemy"
        />
      </Link>
      <NavOption name="Categories" link="#" />
      <SearchBar />
      <NavOption name="Udemy Business" link="#" />
      <NavOption name="Teach on Udemy" link="#" />
      <NavOption name={<i className="bi bi-cart3 cart-icon"></i>} link="#" />
      <NavButton name="Log in" />
      <NavButton name="Sign Up" backgroundColor="black" color="white" />
      <NavButton name={<i className="fa-solid fa-globe"></i>} />
    </nav>
  );
}
const SearchBar = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const processSearch = (e) => {
    e.preventDefault();
    let filter = e.target.querySelector("input").value;
    navigate({
      pathname: "/",
      search: createSearchParams({
        name: filter,
      }).toString(),
    });
  };
  return (
    <div className="search-bar">
      <form onSubmit={processSearch}>
        <button type="submit" id="search-btn">
          <i className="fa fa-search"></i>
        </button>
        <input
          type="text"
          className="input-field"
          placeholder={searchParams.get("name") || "Search for anything"}
        />
      </form>
    </div>
  );
};
const NavOption = (props) => {
  return (
    <div className="option">
      <a href={props.link}>{props.name}</a>
    </div>
  );
};
const NavButton = (props) => {
  return (
    <button
      className="nav-btn"
      style={{ backgroundColor: props.backgroundColor, color: props.color }}
    >
      {props.name}
    </button>
  );
};
export default NavBar;
