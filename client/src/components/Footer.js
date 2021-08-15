import '../styles.css'
import styled from 'styled-components';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container>
            <Links>
                <LinkWrap>
                    <LinkItems>
                        <h2>Contact Us</h2>
                        <Link to='/contact'>
                            Contact
                        </Link>
                        <Link to='/support'>
                            Support
                        </Link>
                        <Link to='/destinations'>
                            Destinations
                        </Link>
                    </LinkItems>
                </LinkWrap>
            </Links>
            <SocialMedia>
                <ScoialWrap>
                    <Logo>
                        <Link to='/'>
                            CUBEsTOR
                        </Link>
                    </Logo>
                    <Rights>© CUBEsTOR 2021. All rights reserved</Rights>
                    <SocialIcon>
                         <Link to='/Facebook' style={{ textDecoration:'none', color:'#fff', fontSize:'24px' }}>
                            <FacebookIcon/>
                        </Link>
                        <Link to='/Instagram' style={{ textDecoration:'none', color:'#fff', fontSize:'24px' }}>
                            <InstagramIcon/>
                        </Link>
                        <Link to='/YouTube' style={{ textDecoration:'none', color:'#fff', fontSize:'24px' }}>
                            <YouTubeIcon/>
                        </Link>
                        <Link to='/Twitter' style={{ textDecoration:'none', color:'#fff', fontSize:'24px' }}>
                            <TwitterIcon/> 
                        </Link>
                    </SocialIcon>
                </ScoialWrap>
            </SocialMedia>
        </Container>
    )
}

const Container = styled.div`
    background-color: #131313;
	padding: 5rem 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const Links = styled.div`
    width: 100%;
	max-width: 1000px;
	display: flex;
	justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 2rem;
    }
`;
const LinkWrap = styled.div`
    display: flex;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;
const LinkItems = styled.div`
    display: flex;
	flex-direction: column;
	/* align-items: flex-start; */
	margin: 16px;
	text-align: center;
	width: 160px;
	box-sizing: border-box;

    h2{
        margin-bottom: 16px;
        color: #fff;
        text-align: center;
    }

    a{
        color: #fff;
        text-decoration: none;
        margin-bottom: 0.5rem;
        transition: 0.3 ease-out
    }

    a:hover{
        color: #e9e9e9c2;
        transition: 0.3 ease-out;
    }

    @media screen and (max-width: 480px){
		margin: 0;
		padding: 10px;
		width: 100%;
    }
`;
const SocialMedia = styled.section`
    max-width: 1000px;
	width: 100%;
`;
const ScoialWrap = styled.div`
    display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	max-width: 1000px;
	margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;
const Logo = styled.div`
    a {
        color: #fff;
        display: flex;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        font-size: 2rem;

        @media screen and (max-width: 820px){
            margin-bottom: 2rem;
        }
    }
`;
const Rights = styled.p`
    color: #fff;

    @media screen and (max-width: 820px){
        margin-bottom: 2rem;
    }
`;
const SocialIcon = styled.div`
    display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240px;
`;

//old
/* <div className="footer__container">
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
        </div> */



export default Footer
