import React from "react";

 const projectCards = [
     {
         title: "",
         description:
           "",
         github: "",
         deployedLink: "",
         src: "",
         alt: "",
         id: 3,
       },
      
      {
        title: "",
        description:
          "",
        github: "",
        deployedLink: "",
        src: "",
        alt: "",
        id: 3,
      },
    ]

//  {
//    title: "",
//    description:
//      "",
//    github: "",
//    deployedLink: "",
//    src: "",
//    alt: "",
//    id: 3,
//  },
//  {
//    title: "",
//    description:
//      "",
//    github: "",
//    deployedLink: "",
//    src: "",
//    alt: "",
//    id: 4,
//  },
//];

export default function Projects() {
  return (
    <section className="project-container">
      <h1 id="projects">My work</h1>
      {projectCards.map((project) => (
        <div key={project.id} className="project-card">
          <div className="outer-image-container small-left">
            <img
              src={"https://pbs.twimg.com/profile_images/1011277014924496897/aTMLLVVZ_400x400.jpg"}
              className="card-img-top"
              alt={project.alt}
              //   id="wishlist-img"
            />
          </div>
          <div className="project-info-left">
        <h2 className="card-title">{project.title}</h2>
        <p className="card-text">
          {project.description}
        </p>
        <a
          href={github.com/Yassin1/quick-ship.git}
          className="btn"
          target="_blank"
          >Deployed App</a
        >
        <a
          href={project.github}
          className="btn"
          target="_blank"
          >Project Repo</a
        >
      </div>
        </div>
      ))}
    </section>
  );
}