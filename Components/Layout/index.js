import React from "react";
import Navigation from "../Navigation";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>G A L L E R Y</h1>
        <Navigation />
      </header>
      <main>{children}</main>
      <footer>
        <p>Gallery</p>
      </footer>
    </div>
  );
}
