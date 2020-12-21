const { NavLink } = require("react-router-dom")

const Theory = () => {
    return (
        <div className="theory">
            <div className="row">
                <h2>Project Managment</h2>
                <div className="col s12">
                    <p>
                        A project is a big responsibility, but you can make it easier to handle by planning it out in advance. This is done by <span className='pop'>identifying</span> your project's <span className='pop'>goals</span> and breaking them down into <span className='pop'>actionable steps</span>. While staying aware of any budget or time constraints, you'll need to adjust your plans as the project takes shape. Then, by communicating with the project members, you'll manage the project to success.
                        <br/>
                        <i><NavLink to="/signup" className='links'>Sign Up</NavLink> to start creating your projects. 
                        Or <NavLink to="/signin" className='links'>Log In</NavLink> to track your progress.</i>
                    </p>
                </div>
            </div>
        </div>
      );
}
 
export default Theory;