import React from "react";

const styles = `
@media screen and (min-width: 320px) {
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Roboto', sans-serif;
      background:  linear-gradient(
        rgba(0, 0, 0, 0.666),
        rgba(255, 255, 255, 0.306)
      ), url("https://iili.io/2kJZox.md.jpg");
      background-size: 400px;
      background-repeat: repeat;
      background-attachment: fixed;
      color: white;
      text-align: center;
    }
    h2,
    h3 {
      margin: 3rem;
    }
    h1 {
      font-family: 'Rock Salt', cursive;
    }
    a {
      text-decoration: none;
      color: rgba(255, 255, 255, 0.9);
    }
    li:hover,
    a:hover,
    a:hover .fa-google {
      color: rgba(255, 213, 0, 0.8);
    }
    .fa-google {
      color: rgba(0, 0, 0, 0.7);
    }
    .nav-bar {
      background: rgba(0, 0, 0, 0.8);
      padding: 1rem;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      grid-template-columns: 2fr 1fr 2fr;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 10px 1px rgba(0, 0, 0, .4);
    }
    .nav-bar a {
      font-size: 1.2rem;
    }
    li {
      list-style: none;
    }
    .ui-card {
      width: 90vw;
      display: grid;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      box-shadow: 0 2px 10px 1px rgba(0, 0, 0, .4);
    }
    .login-text {
      margin: 2rem 0 5rem 0;
    }
    .treats-link {
      padding: 5rem 3rem;
      font-size: 4rem;
      font-family: 'Rock Salt', cursive;
    }
    .inner-ui-card {
      background: linear-gradient(
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.8)
        ), url("https://iili.io/2kJZox.md.jpg");
        background-size: 400px;
        background-repeat: repeat;
        background-attachment: fixed;
        width: 100%;
        height: auto;
        padding: 2rem 0;
    }
    .gold-border {
      background: rgba(255, 213, 0, 0.347);
      padding: 2.5rem 1rem;
    }
    .login-btn {
      background: white;
      color: black;
      padding: 1rem;
      display: inline-block;
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      position: relative;
      -webkit-transition-property: color;
      transition-property: color;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
    }
    .login-btn:before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: black;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transform-origin: 50%;
      transform-origin: 50%;
      -webkit-transition-property: transform;
      transition-property: transform;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
    }
    .login-btn:hover, .login-btn:focus, .login-btn:active {
      color: white;
    }
    .login-btn:hover:before, .login-btn:focus:before, .login-btn:active:before {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
    .recipe-container {
      font-size: 1.2rem;
      margin: 10vh auto;
      width: 90%;
      box-shadow: 0 2px 10px 1px rgba(0, 0, 0, .4);
      border-radius: 2px;
    }
    .info-text {
      width: 90%;
      margin: 0 auto;
      text-align: left;
    }
    .info-text p {
      margin: 1rem 0;
    }
    p.info-text {
      margin: 1rem auto;
    }
    .code {
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      text-align: left;
      margin: 2rem 0;
    }
    .code a {
      background: white;
      color: black;
      padding: 1rem;
      box-shadow: 0 2px 10px 1px rgba(0, 0, 0, .4);
    }
    .code a:hover {
      background: black;
      color: white;
    }
    a:hover,
    a:hover .fa-github {
      color: rgb(255, 213, 0);
    }
    .bar {
      display: none;
    }
  }
  @media screen and (min-width: 700px) {
    body {
      background-size: 500px;
      letter-spacing: 1.2px;
    }
    p {
      margin: .8rem;
    }
    h1 {
      font-size: 4rem;
    }
    .gold-border {
      padding: 5rem 2rem;
    }
    .inner-ui-card {
      padding: 6rem 2rem;
      background-size: 500px;
    }
    .nav-bar a {
      font-size: 1.5rem;
    }
    .fa-code,
    .fa-sign-out,
    .fa-cookie-bite  {
      margin-right: 1rem;
    }
    .code {
      max-width: 40vw;
      margin: 0 auto;
      font-size: 1.5rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .ui-card {
      width: unset;
      min-width: 500px;
    }
    .recipe-lg {
      display: grid;
      grid-template-columns: 1fr 1fr;
      position: relative;
    }
    .bar {
      display: block;
      position: absolute;
      background: linear-gradient(
        rgba(255, 213, 0, 0.347),
        rgba(255, 213, 0, 0.347)
        ), url("https://iili.io/2kJZox.md.jpg");
      background-size: 500px;
      background-repeat: repeat;
      background-attachment: fixed;
      height: 25vh;
      width: .5rem;
      left: 0; 
      right: 0; 
      margin: 0 auto; 
    }
    .code {
      max-width: 20vw;
    }
  }
  @media screen and (min-width: 1600px) {
    .ui-card {
      max-width: 80vw;
    }
  }
  }
  `;

export default styles;
