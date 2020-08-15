import React from "react";
import "./TwitterButton.css";
import clsx from "clsx";

const Items = [ 'Home', 'Search', 'Contact', 'Login'];


export const SocialButtonType = {
  TWITTERBUTTON: "twitter",
};


export function TwitterButton({ type }) {
 
  const className = clsx("fa", {
    "fa-twitter": type === SocialButtonType.TWITTER,

  });

  return (
    <button className={className}>
      
    </button>
  );
}




