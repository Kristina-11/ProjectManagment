const { NavLink } = require("react-router-dom")

const SignedOutLinks = () => {
    return ( 
        <ul className="right nav-signedout">
            <li><NavLink to="/signup">Sign Up</NavLink></li>
            <li><NavLink to="/signin">Log In</NavLink></li>
        </ul>
     );
}
 
export default SignedOutLinks;