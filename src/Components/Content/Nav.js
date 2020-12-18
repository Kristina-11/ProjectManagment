import { Link } from 'react-router-dom'
import { useEffect } from 'react'

// Imports from Components
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import sidenav from 'materialize-css'
import { connect } from 'react-redux'
import { isLoaded } from "react-redux-firebase";

const Navbar = (props) => {
    const { auth } = props;
    const links = isLoaded(auth) && auth ? <SignedInLinks /> : <SignedOutLinks />;

    useEffect(() => {
        let mobileNav = document.querySelectorAll('.sidenav');
        sidenav.Sidenav.init(mobileNav);
    })

    return ( 
        <nav className="nav-wrapper">
            <div className="container">
                <Link to='/' className='brand-logo'>
                    Managment
                </Link>
                { links }
            </div>
        </nav>
     );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth.uid
    }
}
 
export default connect(mapStateToProps)(Navbar)