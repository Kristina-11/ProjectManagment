import { Link } from 'react-router-dom'
import logo from '../../logo-img.png'

const Navbar = () => {
    return ( 
        <nav className="navbar-content">
            <div className="container">
                <Link to='/' className='nav-logo'>
                    <div className="logo">
                        <img src={logo} alt="LOGO" />
                    </div>
                </Link>
            </div>
        </nav>
     );
}
 
export default Navbar;