import React from "react";
import ProjectPage from "../ProjectPage";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Projects: [],
    };
  }

  componentDidMount() {
    UserService.getUsers().then((response) => {
      this.setState({ Projects: response.data });
    });
  }

  render() {
    return <div></div>;
  }
}

export default Project;
