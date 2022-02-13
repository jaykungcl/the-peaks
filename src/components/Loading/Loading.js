import { ReactComponent as Spinner } from "../../assets/spinner.svg";

// styles
import "./Loading.css";

const Loading = () => {
  return (
    <div className="spinner-container">
      <Spinner />
    </div>
  );
};

export default Loading;
