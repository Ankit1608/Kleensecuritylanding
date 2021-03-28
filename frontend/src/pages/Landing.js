import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Gist from "./Gist";
import Academy from "./Academy";
import Ctfenterprise from "./Ctfenterprise";
import Ctfpublic from "./Ctfpublic";
import Singleplatform from "./Singleplatform";
import Footer from "./Footer";
import "./Landing.css";

function Landing() {
  return (
    <>
      <Navbar />
      <Home />
      <Gist />
      <Academy />
      <Ctfenterprise />
      <Ctfpublic />
      <Singleplatform />
      <Footer />
    </>
  );
}

export default Landing;
