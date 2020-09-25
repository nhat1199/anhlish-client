import React from "react";
import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/learning">Learn</Link>
      </li>
    </ul>
  );
}

export default HomePage;
