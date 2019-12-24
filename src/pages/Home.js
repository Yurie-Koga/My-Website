import React from "react";
import IconLink from "../components/IconLink";
import Skills from "../components/Skills";

export default function HomePage() {
  return (
    <div className="container">
      <div class="image" style={{ textAlign: "center" }}>
        <div class="text">
          <h1 style={{ fontSize: "50px" }}>Yurie Koga</h1>
          <p>Energetic Software Developer</p>
          <IconLink IconName="LinkedIn" />
          <IconLink IconName="GitHub" />
        </div>
      </div>

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
          <div class="project">
            <article>
              <h1>Project1</h1>
              <p>bla bla bla</p>
            </article>
          </div>

          <div class="project">
            <article>
              <h1>Project2</h1>
              <p>bla bla bla</p>
            </article>
          </div>

          <div class="project">
            <article>
              <h1>Project3</h1>
              <p>bla bla bla</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
