import { useState } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { compose } from "redux";

const ProjectDetails = (props) => {
    const { project, auth } = props;

    if(!auth) return <Redirect to='/' />;

    if (project) {
        return ( 
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{ project.title }</span>
                        <p>{ project.content }</p>
                        <p>When to do: { project.due }</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by { project.authorFirstName  } { project.authorLastName }</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center loading">
                Loading...
            </div>
        )
    }  
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;

    const project = projects ? projects[id] : null;
    
    return {
        project,
        auth: state.firebase.auth.uid
    }
}
 
export default compose(
    firestoreConnect([
        { collection: 'projects' }
    ]),
    connect(mapStateToProps)
)(ProjectDetails);