const ProjectSummary = ({ pro }) => {
    return (  
        <div className="card z-depth-0 project-summary" key={ pro.id }>
            <div className="card-content">
                <span className="card-title">{ pro.title }</span>
                <p>{ pro.content }</p>
                <p className="date-on-page">{ pro.date }</p>
            </div>
        </div>
    );
}
 
export default ProjectSummary;