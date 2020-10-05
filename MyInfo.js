import React from "react";
import NewComponent from "./NewComponent";
import { OlComponent } from "./OlComponent";
import { divStyle, h1Style, bold } from "./StyleComponents";

function MyInfo () {
  return (
    <article style={divStyle}>
      <h1 style={h1Style}> Honey✋✋</h1>
      <p>I am a honey called <b style={bold}>NON-JAR</b></p>
      <OlComponent/>
      <NewComponent/>
    </article>
  )
}

export default MyInfo;