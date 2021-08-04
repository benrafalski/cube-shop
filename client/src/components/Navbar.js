import '../styles.css'
import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from '../StateProvider'

const Navbar = ({ setCurrentUser, setCategory }) => {
    const history = useHistory()
    const [{ cart, user }, dispatch] = useStateValue()

    const handleLogin = () => {
        if(user){
            setCurrentUser({})
        }
        history.push('/')
    }

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Link to='/' style={{ textDecoration:'none' }}>
                    <span className='navbar__logo'>CUBEsTOR</span>
                </Link>
                {/* <a href="#home" id="navbar__logo">CUBEsTOR</a> */}
                <div className="navbar__toggle" id="mobile-menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className="navbar__menu">
                    <li className="navbar__item">
                        <Link to='/products' style={{ textDecoration:'none' }}> 
                            <span className='navbar__links' onClick={e => setCategory('')}>Products</span>
                        </Link>
                        {/* <a href="#home" class="navbar__links" id="home-page">Products</a> */}
                    </li>
                    <li className="navbar__item">
                        <Link to='/about' style={{ textDecoration:'none' }}> 
                            <span className='navbar__links'>About</span>
                        </Link>
                        {/* <a href="#about" class="navbar__links" id="about-page">About</a> */}
                    </li>
                    <li className="navbar__item">
                        <Link to='/cart' style={{ textDecoration:'none' }}> 
                            <span className='navbar__links'>Cart</span>
                        </Link>
                        {/* <a href="#services" class="navbar__links" id="services-page">Services</a> */}
                    </li>
                    <li className="navbar__btn">
                        {user ? 
                            <Link to='/' style={{ textDecoration:'none' }}>
                                <span className='button' onClick={handleLogin}>Log Out</span>
                            </Link>
                        :
                            <Link to='/login' style={{ textDecoration:'none' }}> 
                                <span className='button'>Log In</span>
                            </Link>
                    
                    }
                        {/* <a href="#sign-up" class="button" id="signup">Sign Up</a> */}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
