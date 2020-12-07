const { default: ProjectSummary } = require("./ProjectSummary")

const ProjectList = ({ projects }) => {
    console.log(projects)
    return (  
        <div className="project-list section">
            { projects.map((pro) => {
                return <ProjectSummary pro={pro} />
            }) }
        </div>
    );
}
 
export default ProjectList;