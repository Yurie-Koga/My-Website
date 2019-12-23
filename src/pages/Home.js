import React from "react";

export default function HomePage() {
  return (
    <div className="container">
      <div class="image">
        <div class="text">
          <h1 style={{ fontSize: "50px" }}>I am Yurie Koga</h1>
          <p>Energetic Software Developer</p>

          {/* <a href="https://github.com/ricsoft" target="_blank">
            <i class="fab fa-instagram icons"></i>
          </a> */}
          <a
            href="https://www.linkedin.com/in/yurie-koga-977700188/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin icons"></i>
          </a>
          <a
            href="https://github.com/Yurie-Koga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github icons"></i>
          </a>
        </div>
      </div>

      <section>
        <div class="contentTitle">
          <h1>ABOUT ME</h1>
        </div>

        <div class="content">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <h1>LANGUAGES</h1>
                {/* <img src="https://picsum.photos/300"></img> */}
              </div>

              <div class="flip-card-back">
                <h1>LANGUAGES</h1>
                <p>C#</p>
                <p>JavaScript</p>
                <p>Java</p>
                <p>Python</p>
                <p>VB.NET</p>
                <p>VBScript</p>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div class="text">
                  <h1>FRAMEWORKS</h1>
                </div>
              </div>
              <div class="flip-card-back">
                <div class="text">
                  <h1>FRAMEWORKS</h1>
                  <p>.NET</p>
                  <p>ASP</p>
                  <p>React</p>
                  <p>Node.js</p>
                  <p>Jest</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div class="text">
                  <h1>DATABASES</h1>
                </div>
              </div>
              <div class="flip-card-back">
                <div class="text">
                  <h1>DATABASES</h1>
                  <p>Oracle</p>
                  <p>SQL Server</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div class="text">
                  <h1>TECHNOLOGIES</h1>
                </div>
              </div>
              <div class="flip-card-back">
                <div class="text">
                  <h1>TECHNOLOGIES</h1>
                  <p>Visual Studio</p>
                  <p>AWS (Amazon Web Services)</p>
                  <p>Cypress</p>
                  <p>Docker</p>
                  <p>Oracle Enterprise Manager</p>
                  <p>SQL Server Management Studio</p>
                </div>
              </div>
            </div>
          </div>
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
