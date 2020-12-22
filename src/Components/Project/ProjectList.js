import { useState } from "react";
import { Link } from "react-router-dom";
import {  getFirestore } from 'redux-firestore';

const { default: ProjectSummary } = require("./ProjectSummary")

const ProjectList = ({ projects, filtered }) => {
    const firestore = getFirestore();

    const [message, setMessage] = useState('');
    
    const deleteIt = (id) => {
        firestore.collection('projects').doc(id).delete()
        .then(
            setMessage('Deleted!')
        ).catch((err) => {
            setMessage('Error deleting task!')
        });
    }

    return (  
        <div className="project-list section">
            { projects && projects.map((pro) => {
                return (
                    <div key={pro.id}>
                        <Link to={'/project/' + pro.id}>
                            <ProjectSummary pro={pro} />
                        </Link>
                    </div>
                )}) || filtered && filtered.map((pro) => {
                return (
                    <div key={pro.id}>
                        <div className='icons'>
                            <img onClick={() => deleteIt(pro.id)} src='https://www.flaticon.com/svg/static/icons/svg/758/758711.svg' width='30px' />
                        </div>
                        <Link to={'/project/' + pro.id}>
                            <ProjectSummary pro={pro} />
                        </Link>
                    </div>
                )})
            }
            { message == 'Deleted!' ? (
                <div className='error green-text center'>
                    { message }
                </div>
            ) : (
                <div className='error red-text center'>
                    { message }
                </div>
            )}
        </div>
    );
}
 
export default ProjectList;