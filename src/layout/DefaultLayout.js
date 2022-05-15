import React from "react";
import { Footer } from "./partials/FooterComponent";
import { Header } from "./partials/HeaderComponent";

export const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <header className="header">
        <Header />
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};
