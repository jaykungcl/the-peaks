import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { SortContext } from "../../context/SortContext";

// styles & icons
import "./MenuBtn.css";
import { ReactComponent as Bookmark } from "../../assets/bookmark-fill.svg";

const MenuBtn = () => {
  const navigate = useNavigate();
  const { setSort } = useContext(SortContext);

  return (
    <div className="menu-btn">
      <button onClick={() => navigate("/bookmark")}>
        <Bookmark />
        VIEW BOOKMARK
      </button>
      <select name="order-by" onChange={(e) => setSort(e.target.value)}>
        <option value="newest">Newest first</option>
        <option value="oldest">Oldest first</option>
        <option value="relevance">Most popular</option>
      </select>
    </div>
  );
};

export default MenuBtn;
