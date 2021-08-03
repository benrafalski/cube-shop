import '../styles.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar">
            <div class="navbar__container">
                <a href="#home" id="navbar__logo">CUBEsTOR</a>
                <div class="navbar__toggle" id="mobile-menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
                <ul class="navbar__menu">
                    <li class="navbar__item">
                        <Link to='/products' style={{ textDecoration:'none' }}> 
                            <span className='navbar__links'>Products</span>
                        </Link>
                        {/* <a href="#home" class="navbar__links" id="home-page">Products</a> */}
                    </li>
                    <li class="navbar__item">
                        <Link to='/about' style={{ textDecoration:'none' }}> 
                            <span className='navbar__links'>About</span>
                        </Link>
                        {/* <a href="#about" class="navbar__links" id="about-page">About</a> */}
                    </li>
                    <li class="navbar__item">
                        <Link to='/account' style={{ textDecoration:'none' }}> 
                            <span className='navbar__links'>Account</span>
                        </Link>
                        {/* <a href="#services" class="navbar__links" id="services-page">Services</a> */}
                    </li>
                    <li class="navbar__btn">
                        <Link to='/login' style={{ textDecoration:'none' }}> 
                            <span className='button'>Log In</span>
                        </Link>
                        {/* <a href="#sign-up" class="button" id="signup">Sign Up</a> */}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
