import { Link } from "react-router-dom";
import HTMLReactParser from "html-react-parser";

import "./Card.css";
import defaultPic from "../../assets/default.png";

const Card = ({ item, size, body }) => {
  const { id, fields, webTitle: title, sectionId } = item;

  return (
    <Link
      to={`/articles/${id}`}
      className={`card ${sectionId} ${size ? size : ""}`}
    >
      <img
        src={fields && fields.thumbnail ? fields.thumbnail : defaultPic}
        alt="thumbnail"
      />
      <div className="text">
        <h6 className={`title ${title.length > 70 ? "small" : ""}`}>{title}</h6>
        {body && <div className="body">{HTMLReactParser(fields.body)}</div>}
      </div>
    </Link>
  );
};

export default Card;
