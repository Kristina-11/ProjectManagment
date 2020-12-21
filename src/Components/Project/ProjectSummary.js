import moment from 'moment'

const ProjectSummary = ({ pro, auth }) => {
    return (  
        <div className="card z-depth-0 project-summary">
            <div className="card-content">
                <span className="card-title">{ pro.title }</span>
                <p>{ pro.content }</p>
                <p className="date-on-page">
                    {pro.authorFirstName } {pro.authorLastName} <br/>
                    { moment(pro.createdAt.toDate()).calendar() }
                </p>
            </div>
        </div>
    );
}
 
export default ProjectSummary;