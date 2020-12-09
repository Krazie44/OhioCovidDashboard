import React, { Component } from 'react'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-wrapper1">
          <div className="logo">
            <p>Total number of cases in OH as of 12/4/2020: </p>
            <p>475,024</p>
            <p>Total number of hospitalizations in OH as of 12/4/2020: </p>
            <p>29,233</p>
            <p>Total number of deaths in OH as of 12/4/2020: </p>
            <p>6,959</p>
            <p>Over the last 14 days we have trended up and then back down. The down part may
                 be a little misleading as testing was reduced over the holidays.
            </p>
          </div>
          
        </div>
      </div>
    )
  }
}

export default Sidebar