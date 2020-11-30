const ProjectDetails = (props) => {

    const id = props.match.params.id;
    
    return ( 
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis asperiores soluta ut enim, laboriosam cum nobis vero dolorem eligendi reprehenderit aliquam illo, natus labore repudiandae ab adipisci consequuntur a officiis?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Kristina</div>
                    <div>27.11.2020</div>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectDetails;