// components
import Category from "../../components/Category/Category";
import TopStories from "../../components/TopStories/TopStories";

const Home = () => {
  return (
    <div className="container content-container">
      <TopStories />
      <Category category="sport" title="Sports" />
      <Category category="culture" title="Culture" />
      <Category category="lifeandstyle" title="Life and style" />
    </div>
  );
};

export default Home;
