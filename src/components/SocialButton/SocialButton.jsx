import React from "react";
import "./SocialButton.css";
import clsx from "clsx";


export const SocialButtonType = {
  FACEBOOK: "facebook",
  TWITTER: "twitter",
};

const KindToClassMapping = {
  [SocialButtonType.FACEBOOK]: "fa-facebook",
  [SocialButtonType.TWITTER]: "fa-twitter",
};



export function SocialButton({ type }) {

  const className = clsx("fa", {
    "fa-facebook": type === SocialButtonType.FACEBOOK,
    "fa-twitter": type === SocialButtonType.TWITTER,

  });

  return (
    <button className={className}>
      
    </button>
  );
}

