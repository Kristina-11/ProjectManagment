import { connect } from "react-redux";
import { signOut } from '../../Store/Actions/authActions';

const { NavLink } = require("react-router-dom")

const SignedInLinks = (props) => {
    const { signOut } = props;
    
    return ( 
        <ul className="right nav-signedin">
            <li><NavLink to="/" onClick={signOut}>Log Out</NavLink></li>
            <li><NavLink to="/profile" className="btn btn-floating">NN</NavLink></li>
        </ul>
     );
}
 
export default connect(null, (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
})(SignedInLinks)