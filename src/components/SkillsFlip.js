import React from "react";

function SkillsFlip({ SkillName }) {
  const Skills = [
    {
      category: "Languages",
      name: ["C#", "JavaScript", "Java", "Python", "VB.NET", "VBScript"]
    },
    {
      category: "Frameworks",
      name: [".NET", "React", "Node.js", "Jest", "ASP.NET"]
    },
    {
      category: "Databases",
      name: ["Oracle", "SQL Server"]
    },
    {
      category: "Technologies",
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
  let randomNum = Math.floor(Math.random() * 9999);
  let imageUrl = "url(https://picsum.photos/300?random=" + randomNum + ")";

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front" style={{ "--imageUrl": imageUrl }}>
          <h1>{skill.category}</h1>
        </div>

        <div className="flip-card-back">
          <h1>{skill.category}</h1>
          {list}
        </div>
      </div>
    </div>
  );
}

export default SkillsFlip;
