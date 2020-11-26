import { Link } from 'react-router-dom'

// Imports from Components
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
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
 
export default Navbar;