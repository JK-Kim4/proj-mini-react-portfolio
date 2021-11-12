import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const title = this.props.data.title;
    const content01 = this.props.data.content.content01;
    const content02 = this.props.data.content.content02;
    const content03 = this.props.data.content.content03;
    const content04 = this.props.data.content.content04;
    const resumeDownload = this.props.data.resumedownload;
    const bio = this.props.data.bio;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src="https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2"
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>자기 소개 Content</h2>
                  <p className="address">
                    <span>{title}</span>
                    <br />
                    <span>
                      {content01}
                      <br />
                      {content02}
                      <br />
                      {content03}
                      <br />
                      {content04}
                    </span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Go to resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
