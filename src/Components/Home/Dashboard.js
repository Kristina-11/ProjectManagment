import { connect } from "react-redux";
import { firestoreConnect, isLoaded } from "react-redux-firebase";
import { compose } from "redux";

const { default: ProjectList } = require("../Project/ProjectList")
const { default: Theory } = require("./Theory")

const Dashboard = (props) => {
    const { projects, auth } = props;
    
    const section =  isLoaded(auth) && auth ? (
        <div>
            <h2>All projects</h2>
            <ProjectList projects={projects} />
        </div> ) : 
        <Theory />;

    return ( 
        <div className="dashboard container">
            <div className="row">
                <div className="col s12">
                    { section }
                </div>
            </div>
        </div>
     );
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth.uid
    }
}

export default compose(
    firestoreConnect([
        { collection: 'projects', orderBy: ['createdAt', 'desc'] }
    ]),
    connect(mapStateToProps)
)(Dashboard);