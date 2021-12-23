import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import Modal from "react-modal";

let id = 0;
class Portfolio extends Component {  
  constructor(prop){
    super(prop);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log('this is:', this);
  }

  render() {

    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage}/>
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>진행 프로젝트 정리</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
