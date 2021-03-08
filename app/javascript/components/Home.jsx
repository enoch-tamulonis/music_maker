import React, {Component} from 'react'
import { Link } from "react-router-dom"

class Home extends Component {
  render() {
    return (
      <div className="h-screen w-full bg-blue-500 flex flex-col items-center justify-center">
        <div className="max-w-xl">
          <h1 className="text-6xl bold text-gray-900 mb-10"> Virtual music maker! </h1>
          <p className="text-3xl mb-10"> With react + rails </p>
          <Link
            to="/projects"
            className="text-gray-300 bg-gray-800 rounded-sm px-6 py-2"
            role="button"
          >
            See Projects
          </Link>
        </div>
      </div>
    )
  }
}

export default Home
