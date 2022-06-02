import React from "react";
import About from "./about";
import Footer from "./footer";
import Header from "./header";
import Interests from "./interests";

export default function Card() {
  return (
    <main>
      <Header />
      <About />
      <Interests />
      <Footer />
    </main>
  );
}
