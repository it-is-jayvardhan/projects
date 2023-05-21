import "./loading.css";
import PacmanLoader from "react-spinners/PacmanLoader";
function Loading() {
  return (
    <div className="loading w3-jumbo">
	<PacmanLoader color="#36d7b7" size={75} aria-label="loading"/>
	</div>
  );
}

export default Loading;
