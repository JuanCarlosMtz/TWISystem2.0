import React, { Component } from "react";
import NavBarA from "../components/NavBarA";

export default class Analytics extends Component {
  render() {
    return (
      <div>
        <NavBarA />
        <br />
        <br />
        <div>
          <iframe
            height={600}
            width={900}
            src="https://datastudio.google.com/embed/reporting/cbab2ed0-5c57-44ea-b219-f4dfd6bb877b/page/MxypC"
            allowfullscreen
            frameborder="0"
          ></iframe>
        </div>
      </div>
    );
  }
}
