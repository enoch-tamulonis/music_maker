import React, {Component} from 'react'
import { Link } from "react-router-dom";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { project: { title: "" } };

    this.addHtmlEntities = this.addHtmlEntities.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { slug }
      }
    } = this.props;

    const url =  `/api/v1/show/${slug}`

    fetch(url)
      .then(resonse => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.")
      })
      .then(response => this.setState({ project: response }))
      .catch(() => this.props.history.push("/projects"))
  }

  addHtmlEntities(str) {
    return String(str)
     .replace(/&lt;/g, "<")
     .replace(/&gt;/g, ">");
  }

  render() {
    const { project } = this.state;

    return (
      <div className="h-screen w-full">
        <section className="w-full py-10 flex flex-col justify-center bg-gray-300">

        </section>
      </div>
    );
  }
}

export default Project
