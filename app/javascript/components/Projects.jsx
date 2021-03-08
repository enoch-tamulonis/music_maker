import React, {Component} from "react"
import { Link } from "react-router-dom"
import DefaultProjectImage from "../images/studio.jpg"

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    const url = "/api/v1/projects/index"
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ projects: response }))
      .catch(() => this.props.history.push("/"));
  }

  render() {
    const { projects } = this.state;
    const allProjects = projects.map((project, index) => (
      <div key={index} className="w-80 h-96 shadow m-8 bg-gray-300 rounded-sm">
        <img
          src={project.image ? project.image : DefaultProjectImage}
          className="card-img-top"
          alt={`image ${ project.title }`}
        />
        <div className="flex flex-col p-4">
          <h5 className="text-lg text-gray-900">{ project.title }</h5>
          <Link to={`/project/${project.id}`} className="text-blue-100 bg-blue-600 px-2 py-1 mt-4 mr-auto transform hover:-translate-y-0.5 transition duration-500">
            View Project
          </Link>
        </div>
      </div>
    ));
    const noRecipe = (
      <div className="w-screen h-screen flex items-center justify-center">
        <h4>
          No projects yet. Why not <Link to="/new_project">create one</Link>
        </h4>
      </div>
    );

    return (
      <>
        <section className="h-80 w-full bg-gray-200 flex flex-col items-center pt-10">
          <h1 className="text-xl"> Recently Created Projects </h1>
          <p className="text-gray-700 max-w-2xl text-center mx-auto pt-2">
            These are some of the newly created projects from
            people using the app that have made there project
            public and opted into being here.
            Check them out and when your ready start your own project!
          </p>
        </section>
        <div className="p-5 bg-gray-800">
          <main className="flex flex-col">
            <div className="w-full flex justify-end">
              <Link to="/project" className="text-gray-800 bg-gray-300 px-4 py-1 rounded-sm">
                Create new project
              </Link>
            </div>
            <div className="flex flex-wrap justify-between">
              { projects.length > 0 ? allProjects : noRecipe }
            </div>
          </main>
        </div>
      </>
    )
  }
}
export default Projects
