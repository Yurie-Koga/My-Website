import React, { Component } from "react";

export default function ContactPage() {
  return (
    <div className="container">
      <div class="parallax">
        <div class="text">
          <h1>Thank you for visiting!</h1>
          <h1>Did you enjoy my website?</h1>
          <p>I would love to hear from you!</p>
        </div>
      </div>

      <div class="coverImage">
        {/* <div class="coverText">Contact</div> */}
        <div class="coverText">
          <h1>Contact</h1>
          <p>If you have questions, I have answers.</p>
          <p>BC, Canada</p>
          <a
            href="https://www.linkedin.com/in/yurie-koga-977700188/"
            target="_blank"
          >
            <i class="fab fa-linkedin icons"></i>
          </a>
          <a href="https://github.com/Yurie-Koga" target="_blank">
            <i class="fab fa-github icons"></i>
          </a>
        </div>
      </div>

      <div class="parallax"></div>
    </div>
  );
}
