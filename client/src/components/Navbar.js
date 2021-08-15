import '../styles.css'
import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

const Navbar = ({ setCurrentUser }) => {
    const history = useHistory()
    const [{ cart, user }, dispatch] = useStateValue()
    const [active, setActive] = useState(false)

    useEffect(() => {
        setActive(false)
    },[])

    const handleLogin = () => {
        if(user){
            setCurrentUser({})
        }
        history.push('/')
    }

    const activateMenu = () => {
        setActive(!active)
    }

    return (
        <NavBar>
            <Container>
                <Link to='/' style={{ textDecoration:'none' }}>
                    <Logo>CUBEsTOR</Logo>
                </Link>
                {active ?
                    <>
                        <Active onClick={activateMenu}>
                            <ActiveBar></ActiveBar>
                            <ActiveBar></ActiveBar>
                            <ActiveBar></ActiveBar>
                        </Active>
                        <ActiveMenu>
                            <NavItem>
                                <Link to='/categories' style={{ textDecoration:'none' }}> 
                                    <Links onClick={e => setActive(false)}>Products</Links>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/about' style={{ textDecoration:'none' }}> 
                                    <Links onClick={e => setActive(false)}>About</Links>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/cart' style={{ textDecoration:'none' }}> 
                                    <Links onClick={e => setActive(false)}>Cart&nbsp;{cart.length > 0 && (<CartSize>&nbsp;{cart.length}&nbsp;</CartSize>)}</Links>
                                </Link>
                            </NavItem>
                            <NavButton>
                            {user 
                                ? 
                                    <Link to='/' style={{ textDecoration:'none' }}>
                                        <LinkButton onClick={handleLogin}>Log out</LinkButton>
                                    </Link>
                                :
                                    <Link to='/login' style={{ textDecoration:'none' }}> 
                                        <LinkButton>Log in</LinkButton>
                                    </Link>
                            
                            }
                            </NavButton>
                        </ActiveMenu>
                    </>
                    :
                    <>
                        <Toggle onClick={activateMenu}>
                            <Bar></Bar>
                            <Bar></Bar>
                            <Bar></Bar>
                        </Toggle>
                        <Menu>
                            <NavItem>
                                <Link to='/categories' style={{ textDecoration:'none' }}> 
                                    <Links>Products</Links>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/about' style={{ textDecoration:'none' }}> 
                                    <Links>About</Links>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/cart' style={{ textDecoration:'none' }}> 
                                    <Links>Cart&nbsp;{cart.length > 0 && (<CartSize>&nbsp;{cart.length}&nbsp;</CartSize>)}</Links>
                                </Link>
                            </NavItem>
                            <NavButton>
                            {user 
                                ? 
                                    <Link to='/' style={{ textDecoration:'none' }}>
                                        <LinkButton onClick={handleLogin}>Log out</LinkButton>
                                    </Link>
                                :
                                    <Link to='/login' style={{ textDecoration:'none' }}> 
                                        <LinkButton>Log in</LinkButton>
                                    </Link>
                            
                            }
                            </NavButton>
                        </Menu>
                    </>
                }
            </Container>
        </NavBar>
    )
}

const NavBar = styled.nav`
    background: #131313;
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 999;
`;
const Container = styled.div`
    display: flex;
	justify-content: space-between;
	width: 100%;
	height: 80px;
	z-index: 1;
	width: 100%;
	max-width: 1300px;
	margin: 0 auto;
	padding: 0 50px;

    @media screen and (max-width: 960px){
        display: flex;
		justify-content: space-between;
		height: 80px;
		z-index: 1;
		width: 100%;
		max-width: 1300px;
		padding: 0;
    }
`;
const Logo = styled.span`
    background-color: #a8ff78;
	background-image: linear-gradient(to top, #78ffd6 0%, #a8ff78 100%);
	background-size: 100%;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	display: flex;
	align-items: center;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	margin-top: 20px;

    @media screen and (max-width: 960px){
        padding-left: 25px;
    }
`;
const Toggle = styled.div`
    @media screen and (max-width: 960px){
        width: 25px;
		height: 20px;
		margin: 5px auto;
		transition: all 0.3s ease-in-out;
		/* background: #fff; */

        position: absolute;
		top: 20%;
		right: 5%;
		transform: translate(5%, 20%);

        display: block;
		cursor: pointer;
    }
`;

const Active = styled.div`
    @media screen and (max-width: 960px){
        width: 25px;
		height: 20px;
		margin: 5px auto;
		transition: all 0.3s ease-in-out;

        position: absolute;
		top: 20%;
		right: 5%;
		transform: translate(5%, 20%);

        display: block;
		cursor: pointer;

        /* background: #131313;
		top: 100%;
		opacity: 1;
		transition: all 0.5s ease;
		z-index: 99;
		height: 60vh;
		font-size: 1.6rem; */
    }  
`;

const Bar = styled.span`
    @media screen and (max-width: 960px){
        width: 25px;
		height: 3px;
		margin: 5px auto;
		transition: all 0.3s ease-in-out;
		background: #fff;

        display: block;
		cursor: pointer;
    }
`;

const ActiveBar = styled.span`
    @media screen and (max-width: 960px){
        width: 25px;
		height: 3px;
		margin: 5px auto;
		transition: all 0.3s ease-in-out;
		background: #fff;

        display: block;
		cursor: pointer;

        &:nth-child(2){
            opacity: 0;
        }

        &:nth-child(1){
            transition: all 0.3s ease-in-out;
            transform: translateY(8px) rotate(45deg);
        }

        &:nth-child(3){
            transform: translateY(-8px) rotate(-45deg);
        }
    }
`;

const Menu = styled.ul`
    display: flex;
	align-items: center;
	list-style: none;

    @media screen and (max-width: 960px){
        display: grid;
		grid-template-columns: auto;
		margin: 0;
		width: 100%;
		position: absolute;
		top: -1000px;
		opacity: 1;
		transition: all 0.5s ease;
		z-index: -1;

        //active
        /* background: #131313;
		top: 100%;
		opacity: 1;
		transition: all 0.5s ease;
		z-index: 99;
		height: 60vh;
		font-size: 1.6rem; */
    }
`;

const ActiveMenu = styled.ul`
    display: flex;
	align-items: center;
	list-style: none;

    @media screen and (max-width: 960px){
        display: grid;
		grid-template-columns: auto;
		margin: 0;
		width: 100%;
		position: absolute;
		top: -1000px;
		opacity: 1;
		transition: all 0.5s ease;
		z-index: -1;

        //active
        background: #131313;
		top: 100%;
		opacity: 1;
		transition: all 0.5s ease;
		z-index: 99;
		height: 60vh;
		font-size: 1.6rem;
    }
`;

const NavItem = styled.li`
    height: 80px;
    padding: 0px 20px;

    @media screen and (max-width: 960px){
        width: 100%;
    }
`;
const Links = styled.span`
    color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
    text-align: center;
	width: 125px;
	text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
	height: 100%;
	transition: all 0.3s ease;

    &:hover{
        color: #9518fc;
        transition: all 0.3s ease;
    }

    @media screen and (max-width: 960px){
        text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;
    }
`;

const CartSize = styled.div`
    background-color: #a8ff78;
	background-image: linear-gradient(to top, #78ffd6 0%, #a8ff78 100%);
	background-size: 100%;
	color: #333333;
	border-radius: 10000px;
	text-align: center;
`;
const NavButton = styled.li`
    display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 1rem;
	width: 100%;

    @media screen and (max-width: 960px){
        padding-bottom: 2rem;
    }
`;
const LinkButton = styled.span`
    display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 10px 20px;
	height: 100%;
	width: 10px;
	border: none;
	outline: none;
    text-transform: uppercase;
    letter-spacing: 2px;
	border-radius: 4px;
	background: #59C173; 
	/* background: -webkit-linear-gradient(to left, #5D26C1, #a17fe0, #59C173); 
	background: linear-gradient(to left, #5D26C1, #a17fe0, #59C173); */
	color: #fff;
	transition: all 0.3s ease;

    @media screen and (max-width: 960px){
        display: flex;
		justify-content: center;
		align-items: center;
        text-align: center;
		width: 200px;
		height: 100%;
		margin: 0;
    }
`;


//old
// <nav className="navbar">
        //     <div className="navbar__container">
        //         <Link to='/' style={{ textDecoration:'none' }}>
        //             <span className='navbar__logo'>CUBEsTOR</span>
        //         </Link>
        //         {/* <a href="#home" id="navbar__logo">CUBEsTOR</a> */}
        //         <div className="navbar__toggle" id="mobile-menu">
        //             <span className="bar"></span>
        //             <span className="bar"></span>
        //             <span className="bar"></span>
        //         </div>
        //         <ul className="navbar__menu">
        //             <li className="navbar__item">
        //                 <Link to='/categories' style={{ textDecoration:'none' }}> 
        //                     <span className='navbar__links'>Products</span>
        //                 </Link>
        //                 {/* <a href="#home" class="navbar__links" id="home-page">Products</a> */}
        //             </li>
        //             <li className="navbar__item">
        //                 <Link to='/about' style={{ textDecoration:'none' }}> 
        //                     <span className='navbar__links'>About</span>
        //                 </Link>
        //                 {/* <a href="#about" class="navbar__links" id="about-page">About</a> */}
        //             </li>
        //             <li className="navbar__item">
        //                 <Link to='/cart' style={{ textDecoration:'none' }}> 
        //                     <span className='navbar__links'>Cart&nbsp;{cart.length > 0 && (<div className='navbar__cartsize'>&nbsp;{cart.length}&nbsp;</div>)}</span>
        //                 </Link>
        //                 {/* <a href="#services" class="navbar__links" id="services-page">Services</a> */}
        //             </li>
        //             <li className="navbar__btn">
        //                 {user ? 
        //                     <Link to='/' style={{ textDecoration:'none' }}>
        //                         <span className='button' onClick={handleLogin}>Log Out</span>
        //                     </Link>
        //                 :
        //                     <Link to='/login' style={{ textDecoration:'none' }}> 
        //                         <span className='button'>Log In</span>
        //                     </Link>
                    
        //             }
        //                 {/* <a href="#sign-up" class="button" id="signup">Sign Up</a> */}
        //             </li>
        //         </ul>
        //     </div>
        // </nav>


export default Navbar
