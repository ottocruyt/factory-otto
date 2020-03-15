import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">
          Factory
          <i className="fas fa-industry" />
        </h1>
      </div>
    </div>
  );
};

export default Header;

/** <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Fluid jumbotron</h1>
    <p class="lead">
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </div>
</div>;*/
