import React from "react";

function Skills({ SkillName }) {
  const Skills = [
    {
      category: "LANGUAGES",
      name: ["C#", "JavaScript", "Java", "Python", "VB.NET", "VBScript"]
    },
    {
      category: "FRAMEWORKS",
      name: [".NET", "React", "Node.js", "Jest", "ASP"]
    },
    { category: "DATABASES", name: ["Oracle", "SQL Server"] },
    {
      category: "TECHNOLOGIES",
      name: [
        "Visual Studio",
        "AWS (Amazon Web Services)",
        "Cypress",
        "Docker",
        "Oracle Enterprise Manager",
        "SQL Server Management Studio"
      ]
    }
  ];

  const skill = Skills.find(v => v.category === String(SkillName));
  let list = [];
  for (let i in skill.name) list.push(<p>{skill.name[i]}</p>);

  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h1>{skill.category}</h1>
        </div>

        <div class="flip-card-back">
          <h1>{skill.category}</h1>
          {list}
        </div>
      </div>
    </div>
  );
}

export default Skills;
