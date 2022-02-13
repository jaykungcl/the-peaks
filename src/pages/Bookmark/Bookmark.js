import { useContext, useEffect, useState } from "react";
import axios from "axios";

// components
import Card from "../../components/Card/Card";
import Loading from "../../components/Loading/Loading";
import { BookmarkContext } from "../../context/BookmarkContext";

// styles
import "./Bookmark.css";

const Bookmark = () => {
  const [articles, setArticles] = useState(null);

  const { bookmark } = useContext(BookmarkContext);
  console.log(bookmark);
  console.log(Boolean(articles));

  useEffect(() => {
    Promise.all(
      bookmark.map((item) =>
        axios.get(
          `https://content.guardianapis.com/${item}?show-fields=thumbnail%2Cbody&api-key=${process.env.REACT_APP_API_KEY}`
        )
      )
    ).then((res) => {
      const data = res.map((item) => item.data.response.content);
      setArticles(data);
    });
  });

  return (
    <div className="container">
      <h4>Bookmark</h4>
      {articles ? (
        <div className="bookmark-container">
          {articles.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      ) : (
        <>
          <Loading />
        </>
      )}
    </div>
  );
};

export default Bookmark;
