import React from "react";
import IconLink from "../components/IconLink";

export default function ContactPage() {
  return (
    <div>
      <div className="parallax">
        <div className="text text-contact">
          <h1>Thank you for visiting!</h1>
        </div>
      </div>

      <div className="coverImage">
        <div className="coverText">
          <h1>Contact</h1>
          <p>I would love to hear from you!</p>
          <p>BC, Canada</p>
          <IconLink IconName="LinkedIn" />
          <IconLink IconName="GitHub" />
        </div>
      </div>

      <div className="parallax"></div>
    </div>
  );
}
