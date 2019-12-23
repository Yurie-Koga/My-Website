import React from "react";

function IconLink({ x }) {
  return (
    <div>
      <a href={x.url} target="_blank" rel="noopener noreferrer">
        <i class={x.icon}></i>
      </a>
    </div>
  );
}

export default IconLink;
