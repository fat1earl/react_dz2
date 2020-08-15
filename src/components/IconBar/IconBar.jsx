import React from "react";
import "./IconBar.css";
import clsx from "clsx";


export const IconBarOrientation = {
  VERTICAL: "vertical",
  HORIZONTAL: "horizontal",
};

const KindToClassMapping = {
  [IconBarOrientation.VERTICAL]: "icon-bar-vertical",
  [IconBarOrientation.HORIZONTAL]: "icon-bar-horizontal",
};

export function IconBar({ orientation }) {

  const className = clsx({
    "icon-bar-vertical": orientation === IconBarOrientation.VERTICAL,
    "icon-bar-horizontal": orientation === IconBarOrientation.HORIZONTAL,

  });

  return (
    <div className={className}>
      <a class="active" href="#"><i class="fa fa-home"></i></a>
  <a href="#"><i class="fa fa-search"></i></a>
  <a href="#"><i class="fa fa-envelope"></i></a>
  <a href="#"><i class="fa fa-globe"></i></a>
  <a href="#"><i class="fa fa-trash"></i></a>
    </div>
  );
}

