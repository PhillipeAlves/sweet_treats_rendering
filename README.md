![Banner](/banner-ssr.gif)

## About

This Rendering Server was build following the Server Architecture approach of having two separate servers for a SSR Application.

The Server is responsible for handling the requests to our [API](https://secure-brushlands-32363.herokuapp.com/), rendering the application and serving it to the user.

[Renderer Server](http://secure-brushlands-32363.herokuapp.com/)

> **note:**
> This README file contains resources about the different steps required to set up a similar SSR Application, making use of isomorphic JavaScript.

---

## SET UP

### FILES AND DEPENDENCIES

#### NODE PROJECT

```
$ mkdir project_name
$ cd project_name
$ npm init -y

// webpack

$ npm i webpack webpack-cli webpack-node-externals webpack-dev-server webpack-merge

// babel

$ npm i @babel/core babel-loader @babel/preset-env @babel/preset-react

// express

$ npm i concurrently nodemon axios express express-http-proxy npm-run-all serialize-javascript

// react/redux

$ npm i react react-dom react-router-dom react-router-config react-helmet react-redux redux-thunk redux  react-helmet

$ touch index.js
```

**_package.json_**

> **development**

```
  "scripts": {
    "dev": "npm-run-all --parallel dev:*",
    "dev:server": "nodemon --watch build --exec \"node build/bundle.js\"",
    "dev:build-server": "webpack --config webpack.server.js --watch",
    "dev:build-client": "webpack --config webpack.client.js --watch"
  },
```

**_webpack.base.js_**

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            ["env", { targets: { browsers: ["last 2 versions"] } }],
          ],
        },
      },
    ],
  },
};

```

**_webpack.client.js_**

```
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

const config = {
  entry: "./src/client/client.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};

module.exports = merge(baseConfig, config);
```

**_webpack.server.js_**

```
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  target: "node",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);

```

### RESOURCES FOR CODE

- [Rendering on the Web](https://developers.google.com/web/updates/2019/02/rendering-on-the-web)

- [Getting started with React SSR](https://blog.jakoblind.no/getting-started-react-ssr/)

- [Server-Side Rendering in React — Redux](https://medium.com/javascript-in-plain-english/server-side-rendering-in-react-redux-8d6209fbfed)

- [Adding state management with Redux in a CRA + SSR project](https://medium.com/bucharestjs/adding-state-management-with-redux-in-a-cra-srr-project-9798d74dbb3b)

- [Server-side rendering: how to serve authenticated content](https://www.bugsnag.com/blog/server-side-rendering-and-authenticated-content)

- [How to server-side render React, hydrate it on the client and combine client and server routes](https://dev.to/marvelouswololo/how-to-server-side-render-react-hydrate-it-on-the-client-and-combine-client-and-server-routes-1a3p)

- [Hydration and Server-side Rendering](https://blog.somewhatabstract.com/2020/03/16/hydration-and-server-side-rendering/)

- [Redux](https://medium.com/@dakota.lillie/flux-vs-redux-a-comparison-bbd5000d5111)

---

## DEPLOY

### Deploying with Heroku

**_Procfile_**

```
web: npm start
```

**_.gitignore_**

```
/node_modules
npm-debug.log
.DS_Store
/\*.env
```

**_index.js_**

```
const port = process.env.PORT || 5000;
app.listen(port);

```

**_package.json_**

> **production**

```
  "scripts": {
    "start": "node build/bundle.js",
    "build": "webpack --config webpack.client.js & webpack --config webpack.server.js",
    "build:start": "webpack --config webpack.client.js && webpack --config webpack.server.js && node build/bundle.js"
  },
```

> **_note:_** The version of Node.js that will be used to run your application on Heroku, should also be defined in your package.json file. You should always specify a Node.js version that matches the runtime you’re developing and testing with. To find your version type node --version.

```
  "engines": {
    "node": "12.18.3"
  },
```

#### Commands

```
$ heroku login
$ heroku create

$ git add .
$ git commit -m "Added a Procfile."

$ git push heroku master
```

---

### About the dependencies

#### ReactDOMServer

> The ReactDOMServer object enables us to render components to static markup. Typically, it’s used on a Node server.

Different from a SPA that uses the [render()](https://reactjs.org/docs/react-dom.html#render) method, because we are rendering from our server we used [renderToString()](https://reactjs.org/docs/react-dom-server.html#rendertostring).

> **renderToString()** renders a React element to its initial HTML. React will return an HTML string. You can use this method to generate HTML on the server and send the markup down on the initial request for faster page loads and to allow search engines to crawl your pages for SEO purposes.

Then on our **_client.js_** we use the [hydrate()](https://reactjs.org/docs/react-dom.html#hydrate) method to complete the process of achieving isomorphic JavaScript.

> **hydrate()** expects the container-element in your HTML to be already rendered by ReactDOMServer and only takes care of attaching event-listeners to it.

#### Redux

> The Redux Library will manage the state in our application. For that we'll use the **createStore** function to make the redux store. The **applyMiddleware** function is used to hook up any middleware inside of our application.
> **Thunk** allows us to handle asynchronous action creators. To use async syntax we will execute the module **babel-polyfill**.

#### Redux Server Side

> **_createStore.js:_** Here we will make use of the **createStore** function to fill our initial state with the loaded data.

> **_index.js:_** After calling our **loadData()** functions we will pass the redux store. Then we will call our action creators and manually dispatch the action that gets returned from that action creator. That will return a promise. Once that promise gets resolved we will render our application with our store initialised.

#### Redux Client Side

> **_client.js:_**
> The **Provider** tag will tie our store, communicating the data from the store to any connected components in our application.
