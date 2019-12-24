import React from "react";
import IconLink from "../components/IconLink";

export default function ContactPage() {
  return (
    <div className="container">
      <div class="parallax">
        <div class="text text-contact">
          <h1>Thank you for visiting!</h1>
          <h1>Did you enjoy my website?</h1>
        </div>
      </div>

      <div class="coverImage">
        <div class="coverText">
          <h1>Contact</h1>
          <p>If you have questions, I have answers.</p>
          <p>I would love to hear from you!</p>
          <p>BC, Canada</p>
          <IconLink IconName="LinkedIn" />
          <IconLink IconName="GitHub" />
        </div>
      </div>

      <div class="parallax"></div>
    </div>
  );
}
