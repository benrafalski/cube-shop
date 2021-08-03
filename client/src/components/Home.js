import '../styles.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>
            {/* Hero section */}
            <div className="hero" id="home">
                <div className="hero__container">
                    <h1 className="hero__heading">Choose your <span>puzzles</span></h1>
                    <p className="hero__description">View our store today</p>
                    <button className="main__btn">{/* <a href="#">Explore</a> */}
                        <Link to='/products'>
                            <span>Explore Now</span>
                        </Link>
                    </button>
                </div>
            </div>
            {/* About section */}
            <div className="main" id="about">
                <div className="main__container">
                    <div className="main__img--container">
                        <div className="main__img--card"><img src='https://image.flaticon.com/icons/png/512/123/123382.png'/></div>
                    </div>
                    <div className="main__content">
                        <h1>A cube shop made by cubers</h1>
                        <h2>That's why we support quality cubes</h2>
                        <p>Have any questions for us?</p>
                        <button className="main__btn">{/* <a href="#">Contact Us</a> */}
                            <Link to='/about'>
                                <span>Contact Us</span>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            {/* Services section */}
            <div className="services" id="services">
                <h1>Our Shop</h1>
                <div className="services__wrapper">
                    <div className="services__card">
                        <h2>3x3 Speed Cubes</h2>
                        <p>Quality Assured</p>
                        <div className="services__btn">
                            <button>
                                <Link to='/products' style={{ textDecoration:'none', color:'#fff' }}>
                                    <span style={{ textDecoration:'none' }}>Shop Now</span>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="services__card">
                        <h2>WCA Puzzles</h2>
                        <p>2x2, Megaminx, Skewb</p>
                        <div className="services__btn">
                            <button>
                                <Link to='/products' style={{ textDecoration:'none', color:'#fff' }}>
                                    <span style={{ textDecoration:'none' }}>Shop Now</span>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="services__card">
                        <h2>8x8+</h2>
                        <p>Megaminx+</p>
                        
                        <div className="services__btn">
                            <button>
                                <Link to='/products' style={{ textDecoration:'none', color:'#fff' }}>
                                    <span style={{ textDecoration:'none' }}>Shop Now</span>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="services__card">
                        <h2>Cuboids</h2>
                        <p>Shape Mods</p>
                        <div className="services__btn">
                            <button>
                                <Link to='/products' style={{ textDecoration:'none', color:'#fff' }}>
                                    <span style={{ textDecoration:'none' }}>Shop Now</span>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Features section */} 
            <div className="main" id="sign-up">
                <div className="main__container">
                    <div className="main__content">
                        <h1>Not already a member?</h1>
                        <h2>Sign Up Today</h2>
                        <p>See what makes us the best</p>
                        <button className="main__btn">{/* <a href="#">Sign Up</a> */}
                            <Link to='/register' style={{ textDecoration:'none', color:'#fff' }}>
                                <span>Sign Up</span>
                            </Link>
                        </button>
                    </div>
                    <div className="main__img--container">
                        <div className="main__img--card" id="card-2"><img src='https://www.pngkey.com/png/full/235-2350076_gmw-host-clipart-library-people-icon-png-white.png'/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
