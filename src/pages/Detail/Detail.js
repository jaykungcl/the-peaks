import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import axios from "axios";

// components
import Loading from "../../components/Loading/Loading";

// styles & icons
import "./Detail.css";
import BookmarkBtn from "../../components/BookmarkBtn/BookmarkBtn";

const Detail = () => {
  const [article, setArticle] = useState(null);
  const { pathname } = useLocation();
  const id = pathname.slice(10);

  useEffect(() => {
    axios
      .get(
        "https://content.guardianapis.com/" +
          id +
          `?api-key=${process.env.REACT_APP_API_KEY}&show-fields=thumbnail%2Cbody%2CtrailText%2Cheadline`
      )
      .then((res) => {
        console.log(res.data.response.content);
        setArticle(res.data.response.content);
      });
  }, [id]);

  return (
    <div className="container article-container">
      {article ? (
        <>
          <div className="article-header">
            <BookmarkBtn id={id} />
            <p className="date-time">
              {new Date(article.webPublicationDate).toString()}
            </p>
            <h4 className="title">{article.webTitle}</h4>
            <h6 className="headline">{article.fields.headline}</h6>
          </div>

          <div className="article-content">
            {HTMLReactParser(article.fields.body)}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Detail;
