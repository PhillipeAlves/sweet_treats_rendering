import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

const Header = ({ location, auth }) => {
  const resolveAuth = auth ? (
    <a href='/api/logout'>
      {" "}
      <i className='fal fa-sign-out'></i> Logout
    </a>
  ) : (
    ""
  );

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const page =
    location === "/"
      ? "Sweet treats"
      : capitalizeFirstLetter(location.slice(1));

  const meta = () => {
    return (
      <Helmet>
        <title>{page}</title>
        <meta property='og:title' content={page} />
      </Helmet>
    );
  };

  const resolvePath =
    location === "/recipes" ? (
      <Link to='/resources'>
        <i className='fal fa-code'></i> Resources
      </Link>
    ) : (
      <Link to='/recipes'>
        <i className='fal fa-cookie-bite'></i> Recipes
      </Link>
    );

  return (
    <nav>
      {meta()}
      <ul
        className='nav-bar'
        style={{ display: `${location !== "/" ? "grid" : "none"}` }}
      >
        <li>{resolvePath}</li>
        <li
          style={{
            fontFamily: `'Rock Salt', cursive`,
            color: `rgb(255, 213, 0)`,
          }}
        >
          ST
        </li>
        <li>{resolveAuth}</li>
      </ul>
    </nav>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
