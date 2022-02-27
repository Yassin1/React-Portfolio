import React, { useState } from "react";
import AboutMe from "../components/aboutme";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Resume from "../components/resume";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    } else if (currentPage === "Projects") {
      return <Projects />;
    } else if (currentPage === "Contact") {
      return <Contact />;
    } else {
      return <Resume />;
    }
  };

  return (
    <div>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />


      {renderPage()}
      <Footer />
    </div>
  );
}