import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
// import { css } from "styled-components/macro"; //eslint-disable-line

import BlogIndex from "pages/BlogIndex";
// import Blog from "Blog.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useFetch from "hooks/useFetch";

export default function App() {
  const { loading, error, data } = useFetch("http://localhost:1337/api/blogs?populate=*");
  if (loading) return <p>loading</p>;
  if (error) return <p>Error</p>;

  return (
    <Router>
      <Switch>
        <Route path="/">
          <BlogIndex />
        </Route>
      </Switch>
    </Router>
  );
}
