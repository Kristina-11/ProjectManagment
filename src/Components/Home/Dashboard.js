import { connect } from "react-redux";

const { default: ProjectList } = require("../Project/ProjectList")
const { default: Notification } = require("./Notification")
const { default: Theory } = require("./Theory")

const Dashboard = ({ projects }) => {
    //console.log(projects)
    return ( 
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m8">
                    <Theory />
                    <ProjectList projects={projects} />
                </div>
                <div className="col s12 m2 offset-m1">
                    <Notification />
                </div>
            </div>
        </div>
     );
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}
 
export default connect(mapStateToProps)(Dashboard);