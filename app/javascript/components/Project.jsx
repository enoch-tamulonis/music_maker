import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { project: {} };
  }

  componentDidMount() {
    const {
      match: {
        params: { slug }
      }
    } = this.props;

    const url =  `/api/v1/show/${slug}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.")
      })
      .then(response => this.setState({ project: response }))
      .catch(() => this.props.history.push("/projects"))
  }

  render() {
    const { project } = this.state;

    return (
      <div className="h-screen w-full">
        <section className="w-full py-10 flex flex-col justify-center bg-gray-300">
          <h1 className="text-5xl text-center text-black"> { project.title } </h1>
        </section>
      </div>
    );
  }
}

export default Project
