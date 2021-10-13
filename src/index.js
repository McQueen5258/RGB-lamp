import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function ColorInput({ color, onChange, number }) {
  return (
    <div
      className={`ui text container field labeled input ${
        number > 255 || number < 0 ? "error" : null
      }`}
      style={{ marginBottom: "10px" }}
    >
      <label className="ui label error">{color}</label>
      <input
        type="number"
        placeholder="(0-255)"
        onChange={(e) => onChange(e.target.value, color)}
      />
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    // YOUR CODE HERE: Initialize your state!
    this.onChange = this.onChange.bind(this);

    this.state = {
      Red: 100,
      Green: 200,
      Blue: 0,
    };
  }

  onChange(number, color) {
    this.setState(() => ({
      [color]: number,
    }));
  }
  render() {
    const { Red, Green, Blue } = this.state;
    return (
      <div className="App">
        <h1>Color Picker</h1>
        {/* YOUR CODE HERE: Part 1 */}
        {/*
            An example input is below.
            Don't forget to add an onChange event handler!.
          */}
        <div className="ui labeled input">
          <ColorInput color="Red" onChange={this.onChange} number={Red} />
        </div>
        <div className="ui labeled input">
          <ColorInput color="Green" onChange={this.onChange} number={Green} />
        </div>
        <div className="ui labeled input">
          <ColorInput color="Blue" onChange={this.onChange} number={Blue} />
        </div>
        <div
          className="preview"
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "rgb(" + Red + "," + Green + "," + Blue + ")",
          }}
        />
        {/* YOUR CODE HERE: Part 3 */}
        <button
          className="ui button"
          onClick={"https://lights-proxy.glitch.me/?color=YOURCOLORHERE"}
        >
          Send
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
