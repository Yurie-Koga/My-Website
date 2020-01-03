import React from "react";

function Projects({ ProjectName }) {
  const Projects = [
    {
      name: "Project 1",
      displayName: "Integration of Legacy Web Apps",
      description: [
        "Functions: Manage product data and process status and share them with HQ to manage external client’s order.",
        "Front-end: JavaScript, VBScript, HTML, CSS, SQL",
        "Back-end: VB.NET, SQL - Run console app by task scheduler to import data from HQ (CSV, spread by comma, fixed data length) to internal DB",
        "Database: MS SQL server, ADO access"
      ]
    },
    {
      name: "Project 2",
      displayName: "Data Analyzing Apps",
      description: [
        "Functions: Analyzing production or machine data to improve yields of production using charts, output reports for external client.",
        "Environment: C#, VB.NET, .NET"
      ]
    },
    {
      name: "Project 3",
      displayName: "Budget Management App",
      description: [
        "Functions: Managing the budget in departments in a fast-paced environment.",
        "Environment: C#, .NET, Oracle Database"
      ]
    },
    {
      name: "Project 4",
      displayName: "Share Patent / Knowledge Apps",
      description: [
        "Functions: Upload and search data about patens and knowledge of products. Search by key words or detail information, display thumbnails of images, manage meeting records.",
        "Environment: C#, .NET, Oracle Database"
      ]
    },
    {
      name: "Project 5",
      displayName: "Refactoring Legacy Systems",
      description: [
        "Systems: Customized for each external client.",
        "Functions: Manage sales, stocks and employees data.",
        "Environment: VB.NET, .NET, Oracle Database"
      ]
    }
  ];

  const project = Projects.find(v => v.name === String(ProjectName));
  let list = [];
  for (let i in project.description) list.push(<p>{project.description[i]}</p>);
  let randomNum = Math.floor(Math.random() * 9999);
  let imageUrl = "url(https://picsum.photos/300?random=" + randomNum + ")";

  return (
    <div className="project">
      <div className="project-title rounded" style={{ "--imageUrl": imageUrl }}>
        <h1>{project.displayName}</h1>
      </div>

      <article className="project-article">{list}</article>
    </div>
  );
}

export default Projects;
