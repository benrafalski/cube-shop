import '../styles.css'

const About = () => {
    return (
        <div class="main" id="about">
            <div class="main__container">
                <div class="main__img--container">
                    <div class="main__img--card"><i class="fas fa-layer-group"></i></div>
                </div>
                <div class="main__content">
                    <h1>What do we do?</h1>
                    <h2>We help businesses scale</h2>
                    <p>Scedule a call to learn more about our services</p>
                    <button class="main__btn"><a href="#">Scedule Call</a></button>
                </div>
            </div>
        </div>
    )
}

export default About
