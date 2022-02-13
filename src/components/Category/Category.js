import React from "react";
import { useFetch } from "../../hooks/useFetch";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";

import "./Category.css";

const Category = ({ category, title }) => {
  const params = new URLSearchParams([["section", category]]);

  const { data } = useFetch(params);

  const news = data && data.slice(0, 4);

  return (
    <>
      <h4 className="title">{title}</h4>
      {news ? (
        <div className="cat-container">
          {news.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Category;
