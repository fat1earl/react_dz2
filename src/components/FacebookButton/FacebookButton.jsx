import React from "react";
import "../SocialButton/FacebookButton.css";
import clsx from "clsx";


export const SocialButtonType = {
  FACEBOOKBUTTON: "facebook",
};


export function FacebookButton({ type }) {

  const className = clsx("fa", {
    "fa-facebook": type === SocialButtonType.FACEBOOK,
 
  });



  return (
    <button className={className}>
      
    </button>
  );
}

