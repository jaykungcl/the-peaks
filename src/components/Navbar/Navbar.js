import "./Navbar.css";
import { ReactComponent as MagnifyingGlass } from "../../assets/magnifying-glass-solid.svg";
import { useState, useRef, useEffect } from "react";
import { useNavigate, createSearchParams, Link } from "react-router-dom";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState(false);

  const inputRef = useRef();
  const formRef = useRef();

  const navigate = useNavigate();

  const handleFocus = () => {
    setFocus(true);
  };

  useEffect(() =>
    window.addEventListener("click", (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setFocus(false);
      }
    })
  );

  useEffect(() => {
    if (focus) {
      inputRef.current.focus();
    } else {
      inputRef.current.value = "";
      setQuery("");
    }
  }, [focus]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (query && focus) {
      navigate({
        pathname: "/search",
        search: `?${createSearchParams([["q", query]])}`,
      });
      setFocus(false);
      setQuery("");
    }
  };

  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="logo">
          <h6 className="the">The</h6>
          <h4 className="peaks">Peaks</h4>
        </Link>
        <div className="search-bar">
          <form className="search-form" onSubmit={handleSearch} ref={formRef}>
            <input
              className={focus ? "" : "hidden"}
              type="text"
              val={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (e.target.value === "") setFocus(false);
              }}
              ref={inputRef}
            />
            <button className={focus ? "active" : ""} onClick={handleFocus}>
              <MagnifyingGlass />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
