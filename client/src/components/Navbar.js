import '../styles.css'

const Navbar = () => {
    return (
        <nav class="navbar">
            <div class="navbar__container">
                <a href="#home" id="navbar__logo">CUBES</a>
                <div class="navbar__toggle" id="mobile-menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
                <ul class="navbar__menu">
                    <li class="navbar__item">
                        <a href="#home" class="navbar__links" id="home-page">Home</a>
                    </li>
                    <li class="navbar__item">
                        <a href="#about" class="navbar__links" id="about-page">About</a>
                    </li>
                    <li class="navbar__item">
                        <a href="#services" class="navbar__links" id="services-page">Services</a>
                    </li>
                    <li class="navbar__btn">
                        <a href="#sign-up" class="button" id="signup">Sign Up</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
