import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import ProjectList from "../Project/ProjectList";

const { default: CreateProject } = require("../Project/CreateProject")

const Profile = (props) => {
    const { filtered } = props;

    const showForm = () => {
        const createProject = document.querySelector('.create');

        if (createProject.classList.contains('create_project_hidden')){
            createProject.classList.remove('create_project_hidden');
            createProject.classList.add('create_project_show');
        } else {
            createProject.classList.remove('create_project_show');
            createProject.classList.add('create_project_hidden');
        }
        
    }
    
    return ( 
        <div className="container">
            <h2>My projects</h2>
            <div className="row">
                <div className="col s12">
                    <div className='profile_add'  onClick={showForm}>
                        <div className="btn btn-floating">
                            <span className="material-icons">+</span>
                        </div>
                        <span className='create_project_button'>Create project</span>
                    </div>
                    <div className="create create_project_hidden">
                        <CreateProject properties={props} />
                    </div>
                </div>
                <div className="col s12">
                    <ProjectList projects={filtered} />
                </div>
            </div>
        </div>
     );
}

const mapStateToProps = (state) => {
    const auth = state.firebase.auth.uid;
    const projects = state.firestore.ordered.projects;

    const filtered = projects && projects.filter(p => {
        return p.authorId == auth
    })

    return {
        auth: state.firebase.auth.uid,
        filtered
    }
}
 
export default compose(
    firestoreConnect([
        { collection: 'projects', orderBy: ['createdAt', 'desc'] }
    ]),
    connect(mapStateToProps)
)(Profile)