import React from "react";

function SkillsList({ SkillName }) {
  const Skills = [
    {
      category: "Languages",
      name: ["C#", "JavaScript", "Java", "Python", "VB.NET", "VBScript"]
    },
    {
      category: "Frameworks",
      name: [".NET", "React", "Node.js", "Express.js", "Jest", "ASP.NET"]
    },
    {
      category: "Databases",
      name: ["Oracle", "SQL Server", "SQLite3"]
    },
    {
      category: "Technologies",
      name: [
        "Visual Studio",
        "AWS (S3, Route 53)",
        "Cypress",
        "Oracle Enterprise Manager",
        "SQL Server Management Studio"
      ]
    }
  ];

  const skill = Skills.find(v => v.category === String(SkillName));
  let list = [];
  for (let i in skill.name) list.push(<p>{skill.name[i]}</p>);
  let randomNum = Math.floor(Math.random() * 9999);
  let imageUrl = "url(https://picsum.photos/300?random=" + randomNum + ")";

  return (
    <div className="flexBox-skillList" style={{ "--imageUrl": imageUrl }}>
      <div style={{ paddingTop: "10px" }}>
        <h1>{skill.category}</h1>
        {list}
      </div>
    </div>
  );
}

export default SkillsList;
