import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../styles.css'

const Categories = () => {
    return (
        <Container>
            <Content>
                <Header>Product Selection</Header>
                <SpeedCubes>
                    <Link to='/products/speedcubes'>
                        <span >3x3 Speedcubes</span>
                    </Link>
                </SpeedCubes>
                <WCA>
                    <Link to='/products/wca-puzzles'>
                        <span >WCA Puzzles</span>
                    </Link>
                </WCA>
                <Large>
                    <Link to='/products/large-puzzles'>
                        <span >8x8+/Megaminx+</span>
                    </Link>
                </Large>
                <Cuboid>
                    <Link to='/products/cuboid'>
                        <span >Cuboids</span>
                    </Link>
                </Cuboid>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 2000px;
	background-color: #131313;
	color: #fff;
`;

const Content = styled.div`
    width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 20px;
	background: #131313;
	margin-top: 100px;
	margin-bottom: 100px;
`;

const Header = styled.h1`
    text-align: center;
`;

const Selection = styled.button`
    font-size: 15px;
	background: #59C173; 
	background: -webkit-linear-gradient(to left, #5D26C1, #a17fe0, #59C173); 
	background: linear-gradient(to left, #5D26C1, #a17fe0, #59C173);
	padding: 20px 60px;
	border: none;
	border-radius: 4px;
	margin-top: 2rem;
	/* cursor: pointer; */
	position: relative;
	transition: all 0.35s;
	outline: none;

    a { 
        position: relative;
        cursor: pointer;
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
`;

const SpeedCubes = styled(Selection)`
    background: #38f9d7; 
	background: -webkit-linear-gradient(to left, #43e97b 0%, #38f9d7 100%); 
	background: linear-gradient(to left, #43e97b 0%, #38f9d7 100%);

    &:after{
        background: #38f9d7;
    }
`;

const WCA = styled(Selection)`
    background: #fa71cd; 
	background: -webkit-linear-gradient(to left, #c471f5 0%, #fa71cd 100%); 
	background: linear-gradient(to left, #c471f5 0%, #fa71cd 100%);

    &:after{
        background: #fa71cd;
    }
`;

const Large = styled(Selection)`
    background: #ffb199; 
	background: -webkit-linear-gradient(to right, #ff0844 0%, #ffb199 100%); 
	background: linear-gradient(to right, #ff0844 0%, #ffb199 100%);

    &:after{
        background: #ff0844;
    }
`;

const Cuboid = styled(Selection)`
    background: #330867; 
	background: -webkit-linear-gradient(to right, #30cfd0 0%, #330867 100%); 
	background: linear-gradient(to right, #30cfd0 0%, #330867 100%);

    &:after{
        background: #30cfd0;
    }
`;

//old
/* <div className='categories'>
            <div className='categories__container'>
                <h1>Product Selection</h1>
                <button className="categories__btn categories__speedcubes">
                    <Link to='/products/speedcubes'>
                        <span >3x3 Speedcubes</span>
                    </Link>
                </button>
                <button className="categories__btn categories__wca">
                    <Link to='/products/wca-puzzles'>
                        <span >WCA Puzzles</span>
                    </Link>
                </button>
                <button className="categories__btn categories__large">
                    <Link to='/products/large-puzzles'>
                        <span >8x8+/Megaminx+</span>
                    </Link>
                </button>
                <button className="categories__btn categories__cuboid">
                    <Link to='/products/cuboid'>
                        <span >Cuboids</span>
                    </Link>
                </button>
            </div>
        </div> */

export default Categories
