import { useSearchParams } from "react-router-dom";

// components
import Card from "../../components/Card/Card";
import Loading from "../../components/Loading/Loading";
import { useFetch } from "../../hooks/useFetch";

// styles
import "./Search.css";

const Search = () => {
  const [searchParams] = useSearchParams();

  const { data } = useFetch(searchParams);
  const result = data && data.slice(0, 8);

  return (
    <>
      <div className="container">
        <h4>Search results for: {searchParams.get("q")}</h4>

        {result ? (
          <div className="search-container">
            {result.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Search;
