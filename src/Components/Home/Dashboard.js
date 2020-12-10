import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const { default: ProjectList } = require("../Project/ProjectList")
const { default: Notification } = require("./Notification")
const { default: Theory } = require("./Theory")

const Dashboard = ({ projects }) => {
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

export default compose(
    firestoreConnect([
        { collection: 'projects' }
    ]),
    connect((state) => ({
        projects: state.firestore.ordered.projects
    }))
)(Dashboard);