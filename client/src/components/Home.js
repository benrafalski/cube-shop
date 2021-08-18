import '../styles.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'

const Home = () => {
    return (
        <div>
            <Hero>
                <ImgSlider/>
                <HeroContainer>
                    <HeroHeading>
                        Choose your <span>puzzles</span>
                    </HeroHeading>
                    <HeroDescription>
                        View our store today
                    </HeroDescription>
                    <MainButton>
                        <Link to='/categories'>
                            <span>Explore Now</span>
                        </Link>
                    </MainButton>
                </HeroContainer>
            </Hero>
            <Main>
                <MainContainer>
                    <MainImgContainer>
                        <MainImgCard>
                            <img src='https://image.flaticon.com/icons/png/512/123/123382.png'/>
                        </MainImgCard>
                    </MainImgContainer>
                    <MainContent>
                        <h1>A cube shop made by cubers</h1>
                        <h2>That's why we support quality cubes</h2>
                        <p>Have any questions for us?</p>
                        <MainButton>
                            <Link to='/about'>
                                <span>Contact Us</span>
                            </Link>
                        </MainButton>
                    </MainContent>
                </MainContainer>
            </Main>
            <Services>
                <h1 style={{ marginTop:'-100px' }}>Our Shop</h1>
                <ServicesWrapper>
                    <ServicesCard>
                        <h2>3x3 Speed Cubes</h2>
                        <p>Quality Assured</p>
                        <ServicesButton>
                            <button>
                                 <Link to='/products/speedcubes' style={{ textDecoration:'none', color:'#fff' }}>
                                     <span style={{ textDecoration:'none' }}>Shop Now</span>
                                 </Link>
                             </button>
                        </ServicesButton>
                    </ServicesCard>
                    <ServicesCard>
                        <h2>WCA Puzzles</h2>
                        <p>2x2, Megaminx, Skewb</p>
                        <ServicesButton>
                            <button>
                                <Link to='/products/wca-puzzles' style={{ textDecoration:'none', color:'#fff' }}>
                                    <span style={{ textDecoration:'none' }}>Shop Now</span>
                                </Link>
                            </button>
                        </ServicesButton>
                    </ServicesCard>
                    <ServicesCard>
                        <h2>8x8+</h2>
                        <p>Megaminx+</p>
                        <ServicesButton>
                            <button>
                                <Link to='/products/large-puzzles' style={{ textDecoration:'none', color:'#fff' }}>
                                    <span style={{ textDecoration:'none' }}>Shop Now</span>
                                </Link>
                            </button>
                        </ServicesButton>
                    </ServicesCard>
                    <ServicesCard>
                        <h2>Cuboids</h2>
                        <p>Shape Mods</p>
                        <ServicesButton>
                            <button>
                                <Link to='/products/cuboid' style={{ textDecoration:'none', color:'#fff' }}>
                                    <span style={{ textDecoration:'none' }}>Shop Now</span>
                                </Link>
                            </button>
                        </ServicesButton>
                    </ServicesCard>
                </ServicesWrapper>
            </Services>
            <Main>
                <MainContainer>
                    <MainContent>
                        <h1>Not already a member?</h1>
                        <h2>Sign Up Today</h2>
                        <p>See what makes us the best</p>
                        <MainButton>
                            <Link to='/register' style={{ textDecoration:'none', color:'#fff' }}>
                                <span>Sign Up</span>
                            </Link>
                        </MainButton>
                    </MainContent>
                    <MainImgContainer>
                        <Card2>
                            <img src='https://www.pngkey.com/png/full/235-2350076_gmw-host-clipart-library-people-icon-png-white.png'/>
                        </Card2>
                    </MainImgContainer>
                </MainContainer>  
            </Main>
        </div>
    )
}


const Hero = styled.div`
    background: #000000;
	background: linear-gradient(to right, #161616, #000000);
	padding: 200px calc(3.5vw + 5px);
    margin-top: -110px;
`;
const HeroContainer = styled.div`
    display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1200px;
	margin: 0 auto;
	height: 90%;
	text-align: center;
	padding: 30px;
`;
const HeroHeading = styled.div`
    font-size: 100px;
	margin-bottom: 24px;
	color: #fff;

    span{
        background: #11998e;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #38ef7d, #11998e);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #38ef7d, #11998e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
    }

    @media screen and (max-width: 768px){
        font-size: 60px;
    }
`;
const HeroDescription = styled.div`
    font-size: 60px;
	background: #da22ff;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #9114ff, #da22ff);  /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to right, #8f0eff, #da22ff);
	background-size: 100%;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }
`;
const MainButton = styled.button`
    font-size: 1.8rem;
	background: #59C173; 
	background: -webkit-linear-gradient(to left, #5D26C1, #a17fe0, #59C173); 
	background: linear-gradient(to left, #5D26C1, #a17fe0, #59C173);
	padding: 20px 60px;
	border: none;
	border-radius: 4px;
	margin-top: 2rem;
	cursor: pointer;
	position: relative;
	transition: all 0.35s;
	outline: none;
    text-transform: uppercase;
    letter-spacing: 2px;

    a{
        position: relative;
        z-index: 2;
        color: #fff;
        text-decoration: none;
    }

    &:after{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: #00F260;
        transition: all 0.35s;
        border-radius: 4px;
    }

    &:hover{
        color: #fff;
    }

    &:hover:after{
        width: 100%;
    }

    @media screen and (max-width: 480px){
        padding: 12px 36px;
		margin: 2.5rem 0;
    }
`;
const Main = styled.div`
    background-color: #131313;
	padding: 10rem 0;
`;
const MainContainer = styled.div`
    display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	height: 90%;
	z-index: 1;
	width: 100%;
	max-width: 1300px;
	padding: 0 50px;

    @media screen and (max-width: 1100px){
        display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin: 0 auto;
		height: 90%;
    }
`;
const MainImgContainer = styled.div`
    text-align: center;

    @media screen and (max-width: 1100px){
        display: flex;
		justify-content: center;
    }
`;
const MainImgCard = styled.div`
    margin: 10px;
	height: 500px;
	width: 500px;
	border-radius: 4px;
	/* display: flex;
	flex-direction: column; */
	justify-content: center;
	color: #fff;
	background-image: linear-gradient(to right, #AAFFA9 0%, #11FFBD 100%);

    img{
        width: 70%;
        margin-top: 80px;
    }

    @media screen and (max-width: 1100px){
        height: 425px;
		width: 425px;
    }

    @media screen and (max-width: 480px){
        width: 250px;
		height: 250px;
    }
`;

const Card2 = styled(MainImgCard)`
    background: #8E2DE2;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);  /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to right, #4A00E0, #8E2DE2);
`;
const MainContent = styled.div`
    color: #fff;
	width: 100%;

    h1{
        font-size: 2rem;
        background: #11998e;  /* fallback for old browsers */
        background: linear-gradient(to right, #38ef7d, #11998e);
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
        text-transform: uppercase;
        margin-bottom: 32px;

        @media screen and (max-width: 1100px){
            font-size: 2.5rem;
            margin-top: 2rem;
        }

        @media screen and (max-width: 480px){
            font-size: 2rem;
            margin-top: 3rem;
        }
    }

    h2{
        font-size: 4rem;
        background: #da22ff;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #9114ff, #da22ff);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #8f0eff, #da22ff);
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;

        @media screen and (max-width: 1100px){
            font-size: 3rem;
        }

        @media screen and (max-width: 480px){
            font-size: 2rem;
        }
    }

    p{
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 700;

        @media screen and (max-width: 1100px){
            font-size: 1.5rem;
            margin-top: 1rem;
        }

        @media screen and (max-width: 480px){
            margin-top: 2rem;
        }
    }

    @media screen and (max-width: 1100px){
        text-align: center;
		margin-bottom: 4rem;
    }
`;
const Services = styled.div`
    border-top: 12px solid #fff;
    border-bottom: 12px solid #fff;
    background: url('https://i.pinimg.com/originals/57/cc/88/57cc88c9b6db806d66200d89787bbc81.jpg');
	background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	padding: 10rem 0;

    h1{
        background-color: #a8ff78;
        background-image: linear-gradient(to top, #78ffd6 0%, #a8ff78 100%);
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
        margin-bottom: 5rem;
        font-size: 2.5rem;
    }
`;
const ServicesWrapper = styled.div`
    display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr;

    @media screen and (max-width: 1300px){
		grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px){
		grid-template-columns: 1fr;
    }
`;
const ServicesCard = styled.div`
    margin: 10px;
	height: 425px;
	width: 300px;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: #fff;
	background-image: linear-gradient(to right, #AAFFA9 0%, #11FFBD 100%);
	transition: 0.3s ease-in;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;


    &:nth-child(2){
        background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);
    }

    &:nth-child(3){
        background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
    }

    &:nth-child(4){
        background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
    }

    &:nth-child(1){
        background-image: linear-gradient(to top, #43e97b 0%, #38f9d7 100%);
    }

    h2{
        text-align: center;
    }

    p{
        text-align: center;
        margin-top: 24px;
        font-size: 20px;
    }

    button{
        color: #fff;
        padding: 14px 24px;
        border: none;
        outline: none;
        border-radius: 4px;
        background: #131313;
        font-size: 1rem;
        text-decoration: none;

        &:hover{
            cursor: pointer;
        }
    }

    &:hover{
        transform: scale(1.015);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        cursor: pointer;
    }
`;
const ServicesButton = styled.div`
    display: flex;
	justify-content: center;
	margin-top: 16px;
`;
//old
// <div className='home'>
        //     {/* Hero section */}
        //     <div className="hero" id="home">
        //         <div className="hero__container">
        //             <h1 className="hero__heading">Choose your <span>puzzles</span></h1>
        //             <p className="hero__description">View our store today</p>
        //             <button className="main__btn">{/* <a href="#">Explore</a> */}
        //                 <Link to='/categories'>
        //                     <span>Explore Now</span>
        //                 </Link>
        //             </button>
        //         </div>
        //     </div>
        //     {/* About section */}
        //     <div className="main" id="about">
        //         <div className="main__container">
        //             <div className="main__img--container">
        //                 <div className="main__img--card"><img src='https://image.flaticon.com/icons/png/512/123/123382.png'/></div>
        //             </div>
        //             <div className="main__content">
        //                 <h1>A cube shop made by cubers</h1>
        //                 <h2>That's why we support quality cubes</h2>
        //                 <p>Have any questions for us?</p>
        //                 <button className="main__btn">{/* <a href="#">Contact Us</a> */}
        //                     <Link to='/about'>
        //                         <span>Contact Us</span>
        //                     </Link>
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        //     {/* Services section */}
        //     <div className="services" id="services">
        //         <h1>Our Shop</h1>
        //         <div className="services__wrapper">
        //             <div className="services__card">
        //                 <h2>3x3 Speed Cubes</h2>
        //                 <p>Quality Assured</p>
        //                 <div className="services__btn">
        //                     <button>
        //                         <Link to='/products/speedcubes' style={{ textDecoration:'none', color:'#fff' }}>
        //                             <span style={{ textDecoration:'none' }}>Shop Now</span>
        //                         </Link>
        //                     </button>
        //                 </div>
        //             </div>
        //             <div className="services__card">
        //                 <h2>WCA Puzzles</h2>
        //                 <p>2x2, Megaminx, Skewb</p>
        //                 <div className="services__btn">
        //                     <button>
        //                         <Link to='/products/wca-puzzles' style={{ textDecoration:'none', color:'#fff' }}>
        //                             <span style={{ textDecoration:'none' }}>Shop Now</span>
        //                         </Link>
        //                     </button>
        //                 </div>
        //             </div>
        //             <div className="services__card">
        //                 <h2>8x8+</h2>
        //                 <p>Megaminx+</p>
                        
        //                 <div className="services__btn">
        //                     <button>
        //                         <Link to='/products/large-puzzles' style={{ textDecoration:'none', color:'#fff' }}>
        //                             <span style={{ textDecoration:'none' }}>Shop Now</span>
        //                         </Link>
        //                     </button>
        //                 </div>
        //             </div>
        //             <div className="services__card">
        //                 <h2>Cuboids</h2>
        //                 <p>Shape Mods</p>
        //                 <div className="services__btn">
        //                     <button>
        //                         <Link to='/products/cuboid' style={{ textDecoration:'none', color:'#fff' }}>
        //                             <span style={{ textDecoration:'none' }}>Shop Now</span>
        //                         </Link>
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     {/* Features section */} 
        //     <div className="main" id="sign-up">
        //         <div className="main__container">
        //             <div className="main__content">
        //                 <h1>Not already a member?</h1>
        //                 <h2>Sign Up Today</h2>
        //                 <p>See what makes us the best</p>
        //                 <button className="main__btn">{/* <a href="#">Sign Up</a> */}
        //                     <Link to='/register' style={{ textDecoration:'none', color:'#fff' }}>
        //                         <span>Sign Up</span>
        //                     </Link>
        //                 </button>
        //             </div>
        //             <div className="main__img--container">
        //                 <div className="main__img--card" id="card-2"><img src='https://www.pngkey.com/png/full/235-2350076_gmw-host-clipart-library-people-icon-png-white.png'/></div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

export default Home
