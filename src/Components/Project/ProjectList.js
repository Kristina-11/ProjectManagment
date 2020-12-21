import { Link } from "react-router-dom";

const { default: ProjectSummary } = require("./ProjectSummary")

const ProjectList = ({ projects, auth }) => {
    return (  
        <div className="project-list section">
            { projects && projects.map((pro) => {
                return (
                    <Link to={'/project/' + pro.id}  key={pro.id}>
                        <ProjectSummary pro={pro} auth={auth} />
                    </Link>
                )})
            }
        </div>
    );
}
 
export default ProjectList;