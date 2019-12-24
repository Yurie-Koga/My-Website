import React from "react";

function IconLink({ IconName }) {
  const IconData = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yurie-koga-977700188/",
      icon: "fab fa-linkedin icons"
    },
    {
      name: "GitHub",
      url: "https://github.com/Yurie-Koga",
      icon: "fab fa-github icons"
    }
  ];
  const data = IconData.find(v => v.name === String(IconName));

  return (
    <a href={data.url} target="_blank" rel="noopener noreferrer">
      <i class={data.icon}></i>
    </a>
  );
}

export default IconLink;
