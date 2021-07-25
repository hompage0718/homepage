import React, { Fragment } from "react";

import { CssBaseline } from "@material-ui/core";

import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <main>
        <div>
          <Body />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
