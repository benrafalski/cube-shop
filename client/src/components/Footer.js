import '../styles.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer__container">
            <div className="footer__links">
                <div className="footer__link--wrapper">
                    <div className="footer__link--items">
                        <h2>Contact Us</h2>
                        <a href="/">Contact</a>
                        <a href="/">Support</a>
                        <a href="/">Destinations</a>
                    </div>
                </div>
            </div>
            <section className="social__media">
                <div className="social__media--wrap">
                    <div className=".footer__logo">
                        <a href="/" id="footer__logo">CUBEsTOR</a>
                    </div>
                    <p className="website__rights">© CUBEsTOR 2021. All rights reserved</p>
                    <div className="social__icon">
                        <Link to='/Facebook' style={{ textDecoration:'none', color:'#fff' }}>
                            <FacebookIcon/>
                        </Link>
                        <Link to='/Instagram' style={{ textDecoration:'none', color:'#fff' }}>
                            <InstagramIcon/>
                        </Link>
                        <Link to='/YouTube' style={{ textDecoration:'none', color:'#fff' }}>
                            <YouTubeIcon/>
                        </Link>
                        <Link to='/Twitter' style={{ textDecoration:'none', color:'#fff' }}>
                            <TwitterIcon/> 
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
