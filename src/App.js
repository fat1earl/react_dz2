import React from "react";

import { SocialButton } from "./components/SocialButton/SocialButton";
import { FacebookButton } from "./components/FacebookButton/FacebookButton";
import { TwitterButton } from "./components/TwitterButton/TwitterButton";

import { IconBar } from "./components/IconBar/IconBar";
import { Accounting } from "./components/Accounting/Accounting";
import { NavBar } from "./components/NavBar/NavBar";

class App extends React.Component {
  render() {
    return (
      <div>
        <IconBar orientation="horizontal" />

        <SocialButton type="facebook" />
        <SocialButton type="twitter" />

        <FacebookButton />
        <TwitterButton />
        <Accounting />
        <IconBar orientation="vertical" />
        <NavBar initialActiveItemId="Contact" />
      </div>
    );
  }
}

export default App;
