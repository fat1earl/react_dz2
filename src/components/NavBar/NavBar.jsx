import React from "react";
import "./NavBar.css";

const Items = [ 'Home', 'Search', 'Contact', 'Login'];

export class NavBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      initialActiveItemId: props.initialActiveItemId,
  }
  }

  render() {
    return (
      <div className="navbar">
        {Items.map((item) =>
        <a 
        className={ this.state.initialActiveItemId === item ? "active" : null }
        href="#"
        onClick = {() => {
          this.setState({
            initialActiveItemId: item,
          })
        }}
        >
          {item}
        </a>
        )}
        </div>
    )
      }
    }
  
    