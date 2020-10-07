import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Home = ({ auth }) => {
  const text = auth ? (
    <Link
      style={{ fontSize: "3rem" }}
      className='inner-ui-card treats-link'
      to='/recipes'
    >
      SWEET TREATS
    </Link>
  ) : (
    <div className='inner-ui-card'>
      <h2>Welcome to</h2>
      <h1>SWEET TREATS</h1>
      <p className='login-text'>Log in to get amazing cooking recipes.</p>
      <a className='login-btn' href='/api/auth/google'>
        <i className='fab fa-google'> </i> Login
      </a>
    </div>
  );

  return <div className='ui-card gold-border'>{text}</div>;
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default {
  component: connect(mapStateToProps)(Home),
};
