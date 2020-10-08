import React, { Component } from "react";

class Resources extends Component {
  render() {
    return (
      <div className='recipe-container gold-border'>
        <div className='resources inner-ui-card'>
          <h1>Resources</h1>
          <h2>ABOUT</h2>
          <p className='info-text'>
            This Website is part of a series of studies on computer science. It
            has for scope the use of Server-Side Rendering with isomorphic
            JavaScript on React Applications. And more specifically how to serve
            authenticated content from a remote API that was built specifically
            for this context.
          </p>
          <p className='info-text'>
            The authentication is done via Google OAuth and the data is then
            rendered by a second server that works as a proxy-server (sending
            the users request to the API) and as a renderer (displaying the data
            to the user).
          </p>
          <p className='info-text'>
            After the authentication the user has access to developing resources
            for the setup of this application and, as a sweet treat, a few
            amazing cooking recipes collected over the years by the author
            during his previous career as a Chef.
          </p>
          <h2>CODE</h2>
          <p className='info-text'>
            The code for both applications is available on Github. To learn more
            about each step of the project check the following links.
          </p>
          <div className='code'>
            <a href='https://github.com/PhillipeAlves/recipes_api'>
              <i className='fab fa-github'></i> API
            </a>
            <a href='https://github.com/PhillipeAlves/sweet_treats_rendering'>
              <i className='fab fa-github'></i> SSR
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default {
  component: Resources,
};
