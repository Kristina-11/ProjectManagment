import { Link } from 'react-router-dom'
import { useEffect } from 'react'

// Imports from Components
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import sidenav from 'materialize-css'
import { connect } from 'react-redux'

const Navbar = () => {

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
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
     );
}

const mapStateToProps = (state) => {
    console.log(state)
    return {

    }
}
 
export default connect(mapStateToProps)(Navbar)