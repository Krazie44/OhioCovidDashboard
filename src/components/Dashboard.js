import React, { Component } from 'react'
import ChartistGraph from 'react-chartist'

class Dashboard extends Component {
  render() {
    let casesData = {
      labels: [
        "11-21","11-22","11-23","11-24","11-25","11-26","11-27",
        "11-28","11-29","11-30","12-1","12-2","12-3","12-4"
      ],
      series: [
        [3393,5050,10605,9721,8780,2389,7636,5494,4960,10348,8177,6590,4907,2744],
      ]
    }
    let hospitializationData = {
      labels: [
        "11-21","11-22","11-23","11-24","11-25","11-26","11-27",
        "11-28","11-29","11-30","12-1","12-2","12-3","12-4"
      ],
      series: [
        [245,270,314,291,249,235,294,266,247,263,209,142,112,73],

      ]
    }
      let deathData = {
        labels: [
          "11-21","11-22","11-23","11-24","11-25","11-26","11-27",
          "11-28","11-29","11-30","12-1","12-2","12-3","12-4"
        ],
        series: [
          [36,39,47,39,47,39,44,43,44,46,42,27,23,6],
        ]
    }
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">New Cases</h4>
                  <p className="card-category">Number of New Covid-19 Cases in Ohio by Date</p>
                </div>
                <div className="card-body ">
                  <ChartistGraph data={casesData} type="Line" />
                </div>
                <div className="card-footer ">
                  <div className="legend">
                    <i className="fa fa-circle text-info"></i> New Cases

                </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history"></i> Last Updated: 12/6/2020
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">New Daily Hospitializations</h4>
                  <p className="card-category">Number of New Hospitializations in Ohio by Date</p>
                </div>
                <div className="card-body ">
                  <ChartistGraph data={hospitializationData} type="Line" />
                </div>
                <div className="card-footer ">
                  <div className="legend">
                    <i className="fa fa-circle text-info"></i> New Hospitializations

                </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history"></i> Last Updated: 12/6/2020
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">Daily Deaths</h4>
                  <p className="card-category">Number of Covid-19 deaths in Ohio by Date</p>
                </div>
                <div className="card-body ">
                  <ChartistGraph data={deathData} type="Bar" />
                </div>
                <div className="card-footer ">
                  <div className="legend">
                    <i className="fa fa-circle text-info"></i> New Deaths

                </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history"></i> Last Updated: 12/6/2020
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}

export default Dashboard