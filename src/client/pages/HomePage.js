import React from 'react'

const Home = () => {
  return (
    <div className='ui-card gold-border'>
      <div className='inner-ui-card'>
        <h2>Welcome to</h2>
        <h1>SWEET TREATS</h1>
        <p className='login-text'>Log in to get amazing cooking recipes.</p>
        <a className='login-btn' href='/api/auth/google'>
          <i className='fab fa-google'></i> Login
        </a>
      </div>
    </div>
  )
}

export default {
  component: Home
}
