import React from "react";
import IconLink from "../components/IconLink";
import SkillsList from "../components/SkillsList";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";

export default function HomePage() {
  return (
    <div>
      <section>
        <div className="pageTop image" style={{ textAlign: "center" }}>
          <div className="text">
            <h1 className="myName" style={{ fontSize: "50px" }}>
              Yurie Koga
            </h1>
            <p>Energetic Software Developer</p>
            <IconLink IconName="LinkedIn" />
            <IconLink IconName="GitHub" />
          </div>
        </div>
      </section>

      <section>
        <div className="contentTitle">
          <h1>About Me</h1>
        </div>

        <div className="skill-content">
          <SkillsList SkillName="Languages" />
          <SkillsList SkillName="Frameworks" />
          <SkillsList SkillName="Databases" />
          <SkillsList SkillName="Technologies" />
        </div>
      </section>

      <section>
        <div className="contentTitle">
          <h1>Contributed Projects</h1>
        </div>

        <div className="project-content">
          <div data-aos="fade-right">
            <Projects ProjectName="Project 1" />
          </div>
          <div data-aos="fade-left">
            <Projects ProjectName="Project 2" />
          </div>
          <div data-aos="fade-right">
            <Projects ProjectName="Project 3" />
          </div>
        </div>
      </section>

      <section>
        <div className="contentTitle">
          <h1>Blogs</h1>
        </div>
        <div className="blog-content">
          <Blogs />
        </div>
      </section>
    </div>
  );
}
