import React from "react";

function Projects({ ProjectName }) {
  const Projects = [
    {
      name: "Project 1",
      description: [
        "Led the development of a web system for connecting two main web systems in this company which were used for analyzing production or machine data",
        "Defined requirements, designed(system and database), implemented and tested",
        "Wrote architecture documents"
      ]
    },
    {
      name: "Project 2",
      description: [
        "Developed internal software for 100+ employees in Windows environment for managing the budget in departments to manage the money in a fast-paced environment",
        "Created new solutions to share knowledge and patents about production between each department"
      ]
    },
    {
      name: "Project 3",
      description: [
        "Developed and tested programs for customized systems such as for sales, stocks and employees management",
        "Contributed refactoring systems from VB6 to VB.NET",
        "Fixed various bugs and improved stability and accuracy"
      ]
    }
  ];

  const project = Projects.find(v => v.name === String(ProjectName));
  let list = [];
  for (let i in project.description) list.push(<p>{project.description[i]}</p>);
  let imageId = Math.floor(Math.random() * 1000);
  let imageUrl = "url(https://picsum.photos/id/" + imageId + "/300)";

  return (
    <div
      class="project project-image rounded"
      style={{ "--imageUrl": imageUrl }}
    >
      <article>
        <h1>{project.name}</h1>
        {list}
      </article>
    </div>
  );
}

export default Projects;
