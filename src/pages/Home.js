import React from "react";
import IconLink from "../components/IconLink";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function HomePage() {
  return (
    <div className="container">
      <section>
        <div class="image" style={{ textAlign: "center" }}>
          <div class="text">
            <h1 style={{ fontSize: "50px" }}>Yurie Koga</h1>
            <p>Energetic Software Developer</p>
            <IconLink IconName="LinkedIn" />
            <IconLink IconName="GitHub" />
          </div>
        </div>
      </section>

      <section>
        <div class="contentTitle">
          <h1>ABOUT ME</h1>
        </div>

        <div class="content">
          <Skills SkillName="LANGUAGES" />
          <Skills SkillName="FRAMEWORKS" />
          <Skills SkillName="DATABASES" />
          <Skills SkillName="TECHNOLOGIES" />
        </div>
      </section>

      <section>
        <div class="contentTitle">
          <h1>CONTRIBUTED PROJECTS</h1>
        </div>

        <div class="content">
          <Projects ProjectName="Project 1" />
          <Projects ProjectName="Project 2" />
          <Projects ProjectName="Project 3" />
        </div>
      </section>
    </div>
  );
}
