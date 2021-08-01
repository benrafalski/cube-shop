import '../styles.css'

const Footer = () => {
    return (
        <div class="footer__container">
            <div class="footer__links">
                <div class="footer__link--wrapper">
                    <div class="footer__link--items">
                        <h2>About Us</h2>
                        <a href="/sign__up">How it works</a>
                        <a href="/">Testimonials</a>
                        <a href="/">Careers</a>
                        <a href="/">Terms of Service</a>
                    </div>
                    <div class="footer__link--items">
                        <h2>Contact Us</h2>
                        <a href="/">Contact</a>
                        <a href="/">Support</a>
                        <a href="/">Destinations</a>
                    </div>
                </div>
                <div class="footer__link--wrapper">
                    <div class="footer__link--items">
                        <h2>Videos</h2>
                        <a href="/">Submit Video</a>
                        <a href="/">Ambassadors</a>
                        <a href="/">Agency</a>
                    </div>
                    <div class="footer__link--items">
                        <h2>Social Media</h2>
                        <a href="/">Instagram</a>
                        <a href="/">Facebook</a>
                        <a href="/">YouTube</a>
                        <a href="/">Twitter</a>
                    </div>
                </div>
            </div>
            <section class="social__media">
                <div class="social__media--wrap">
                    <div class=".footer__logo">
                        <a href="/" id="footer__logo">COLOR</a>
                    </div>
                    <p class="website__rights">© COLOR 2021. All rights reserved</p>
                    <div class="social__icon">
                        <a href="/" class="social__icon--links"><i class="fab fa-facebook" target="_blank"></i></a>
                        <a href="/" class="social__icon--links"><i class="fab fa-instagram" target="_blank"></i></a>
                        <a href="/" class="social__icon--links"><i class="fab fa-youtube" target="_blank"></i></a>
                        <a href="/" class="social__icon--links"><i class="fab fa-twitter" target="_blank"></i></a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
