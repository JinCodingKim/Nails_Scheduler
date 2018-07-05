import React from "react";
import { withRouter } from "react-router-dom";
import "../../styles/css/home.css";

function Home({ history }) {
  return (
    <div className="home main">
      <button
        className="home-button"
        onClick={() => history.push("/appointment")}
      >
        Schedule Online Now
      </button>
    </div>
  );
}
export default withRouter(Home);
