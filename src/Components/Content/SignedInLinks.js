const { NavLink } = require("react-router-dom")

const SignedInLinks = () => {
    return ( 
        <ul className="right nav-signedin">
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/profile" className="btn btn-floating">NN</NavLink></li>
        </ul>
     );
}
 
export default SignedInLinks;