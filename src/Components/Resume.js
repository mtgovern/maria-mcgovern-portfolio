import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var skills = this.props.data.skills.map(function (skills) {
        var className = skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div>
              <ul className="skills">
                <li>{skills}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
