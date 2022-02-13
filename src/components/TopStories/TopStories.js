import Card from "../Card/Card";
import "./TopStories.css";
// compoennts
import { useFetch } from "../../hooks/useFetch";
import Loading from "../Loading/Loading";
import MenuBtn from "../MenuBtn/MenuBtn";

const TopStories = () => {
  const params = new URLSearchParams([
    ["section", "news"],
    ["page-size", 30],
  ]);

  const { data } = useFetch(params);
  const news =
    data &&
    data
      .filter(
        (item) =>
          item.webTitle !== "Corrections and clarifications" &&
          item.webTitle !== "For the record"
      )
      .slice(0, 8);

  const size = ["L", "S1", "S2", "XS1", "XS2", "M1", "M2", "M3"];

  return (
    <>
      <div className="header-top-stories">
        <h4>Top Stories</h4>
        <MenuBtn />
      </div>

      {news ? (
        <div className="top-stories">
          {news.map((item, index) => (
            <Card key={index} item={item} size={size[index]} body={true} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default TopStories;
