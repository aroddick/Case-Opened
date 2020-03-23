import React, { Component } from "react";
import Daniel from '../assets/daniel.jpeg';
import Alan from '../assets/alan.jpg'

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h1>About Us</h1>
        <div style={{width:1000, float:'left'}}>
          <img
            src={Daniel}
            hspace="15"
            width="200"
            alt=""
            style = {{
              float:'left',
            }}
          />
          <h2>Daniel - Founder</h2>
          <p>Daniel loves to annoy people and harrass everyone inside this house. 
          </p>
        </div>
        <div style={{width:1000, float:'left'}}>
          <img
            src={Alan}
            hspace="15"
            width="200"
            alt=""
            style = {{
              float:'left',
            }}
          />
          <h2>Alan - Developer</h2>
          <p>Alan is the best and never does anything wrong and is loved by all. 
          </p>
        </div>
        
      </div>
    );
  }
}

export default AboutUs;
