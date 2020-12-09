import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <nav>
              <p className="comment text-center">Updated daily, as needed</p>
          </nav>
        </div>
      </footer>
    )
  }
}

export default Footer