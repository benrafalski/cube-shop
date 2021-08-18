import '../styles.css'
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone'
import { Link, useHistory } from 'react-router-dom'
import { colors } from '@material-ui/core'
import { useStateValue } from '../StateProvider'
import { useEffect } from 'react'
import styled from 'styled-components'

const ViewItem = ({ id, title, price, rating, image, category, type, magnets, size, weight, released, description }) => {
    const history = useHistory()
    const [{ cart }, dispatch] = useStateValue()

    useEffect(() => {
        if(title == undefined){
            history.push('/categories')
        }
    }, [title])

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image,
                category: category,
                type: type,
                magnets: magnets,
                size: size,
                weight: weight,
                released: released,
                description: description
            }
        })
    }
    return (
        <Item>
            <Container>
                <Title>
                    {title}
                </Title>
                <InfoContainer>
                    <img src={image}/>
                    {category === 'speedcubes' && 
                        <SC>
                            <p>
                                <small>Price: $</small>
                                <strong>{price}</strong> 
                            </p>
                            <Rating>
                                <RatingText>Rating:</RatingText>
                                {Array(rating)
                                    .fill()
                                    .map((_, i) => (
                                    <StarTwoToneIcon/>
                                ))}
                            </Rating>
                        </SC>
                    }
                    {category === 'wca-puzzles' && 
                        <WCA>
                            <p>
                                <small>Price: $</small>
                                <strong>{price}</strong> 
                            </p>
                            <Rating>
                                <RatingText>Rating:</RatingText>
                                {Array(rating)
                                    .fill()
                                    .map((_, i) => (
                                    <StarTwoToneIcon/>
                                ))}
                            </Rating>
                        </WCA>
                    }
                    {category === 'large-puzzles' && 
                        <Large>
                            <p>
                                <small>Price: $</small>
                                <strong>{price}</strong> 
                            </p>
                            <Rating>
                                <RatingText>Rating:</RatingText>
                                {Array(rating)
                                    .fill()
                                    .map((_, i) => (
                                    <StarTwoToneIcon/>
                                ))}
                            </Rating>
                        </Large>
                    }
                    {category === 'cuboid' && 
                        <Cuboid>
                            <p>
                                <small>Price: $</small>
                                <strong>{price}</strong> 
                            </p>
                            <Rating>
                                <RatingText>Rating:</RatingText>
                                {Array(rating)
                                    .fill()
                                    .map((_, i) => (
                                    <StarTwoToneIcon/>
                                ))}
                            </Rating>
                        </Cuboid>
                    }
                </InfoContainer>
                <InfoButton onClick={addToCart}>
                        <span>Add to Cart</span>
                </InfoButton>
                <DetailsContainer>
                    <Details>
                        <h5>Details</h5>
                        <p>Type: {type}</p>
                        <p>Magnets: {magnets}</p>
                        <p>Size: {size}</p>
                        <p>Weight: {weight}</p>
                        <p>Released: {released}</p>
                    </Details>
                    <Description>
                        <h5>Description</h5>
                        <p>{description}</p> 
                    </Description>
                </DetailsContainer>
            </Container>
        </Item>
    )
}

const Item = styled.div`
    background-color: #131313;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Container = styled.div`
    display: flex;
	flex-direction: column;
	align-items: center;
	width: 550px;
	max-height: 900px;
	/* border: 1px solid gray; */
	border-radius: 4px;
	margin-top: 50px;
	color: #fff;
	background: linear-gradient(to bottom, #131313, #000000);
`;
const Title = styled.p`
        margin-top: 60px;
        margin-bottom: 0px;
        font-size: 1.6rem;
        text-align: center;
        padding-bottom: 40px;
        background: #fff;  
        /* background: -webkit-linear-gradient(to right, #38ef7d, #11998e);  
        background: linear-gradient(to right, #38ef7d, #11998e);  */
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
        /* border-bottom: 1px solid lightgray; */
`;

const InfoContainer = styled.div`
    display: flex;
	flex-direction: row;
	margin: 25px;
	border-top: 1px solid lightgray;
	border-bottom: 1px solid lightgray;
	padding-bottom: 40px;
	padding-top: 40px;

    img {
        /* max-height: 180px; */
        width: 50%;
        height: auto;
        object-fit: cover;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-left: 15px;
        border-radius: 4px;
        transition: 0.3s ease-in;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
    }

    img:hover{
        transform: scale(1.025);
        transition: 0.3s ease-in;
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }

`;
const Info = styled.div`
    display: flex;
	flex-direction: column;
	margin-top: 3px;
	padding: 20px;
	margin-left: 30px;
	justify-content: center;
	height: 100%;
	height: 270px;
	border: 1px solid lightgray;
	border-color: gray;
	border-radius: 4px;
    letter-spacing: 2px;
    font-weight: bold;
	/* background: #da22ff;  /* fallback for old browsers */
	/* background: -webkit-linear-gradient(to right, #9114ff, #da22ff);  
	background: linear-gradient(to right, #8f0eff, #da22ff);
	background-size: 100%;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent; */ 
	transition: 0.3s ease-in;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;

    &:hover{
        transform: scale(1.015);
        transition: 0.3s ease-in;
        /* background: #da22ff;  
        background: -webkit-linear-gradient(to right, #9114ff, #da22ff);  
        background: linear-gradient(to right, #8f0eff, #da22ff);
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent; */
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }

    p{
        padding: 20px;
        /* border: 1px solid lightgray; */
        /* height: 100%; */
    }
`;

const SC = styled(Info)`
    background-image: linear-gradient(to top, #43e97b 0%, #38f9d7 100%);
`;
const WCA = styled(Info)`
    background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);
`;
const Large = styled(Info)`
    background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
`;
const Cuboid = styled(Info)`
    background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
`;
const Rating = styled.div`
    text-align: center;
	/* border: 1px solid lightgray; */
	border-top: none;
	padding: 20px;
    font-weight: 500;
	color: #fff;
`;
const RatingText = styled.p`
    font-weight: bold;
    letter-spacing: 2px;
    /* background: #da22ff; 
	background: -webkit-linear-gradient(to right, #9114ff, #da22ff); 
	background: linear-gradient(to right, #8f0eff, #da22ff);
	background-size: 100%;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent; */
    color: #fff;
`;
const InfoButton = styled.button`
    font-size: 1.8rem;
	align-items: center;
	/* background: #59C173; 
	background: -webkit-linear-gradient(to left, #5D26C1, #a17fe0, #59C173); 
	background: linear-gradient(to left, #5D26C1, #a17fe0, #59C173); */
	padding: 10px 20px;
	border: 2px solid;
	border-radius: 4px;
	margin-bottom: 3px;
	/* cursor: pointer; */
	position: relative;
	/* transition: all 0.35s; */
    text-transform: uppercase;
    letter-spacing: 4px;
	outline: none;
	height: 50px;
	font-size: 20px;
	text-align: center;
    transition: all 0.3s ease-in;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
    background: transparent;
    color: #a17fe0;

    span{
        position: relative;
        z-index: 2;
        /* color: #fff; */
        text-decoration: none;
        cursor: pointer;
    }

    /* &:after{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: #00F260;
        transition: all 0.35s;
        border-radius: 4px;
    } */

    &:hover{
        background-color: #5D26C1;
        color: #a17fe0;
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scale(1.015);
    }

    /* &:hover:after{
        width: 100%;
    } */
`;
const SCButton = styled(InfoButton)`
    background: #38f9d7; 
	background: -webkit-linear-gradient(to left, #43e97b 0%, #38f9d7 100%); 
	background: linear-gradient(to left, #43e97b 0%, #38f9d7 100%);

    &:after{
        background: #38f9d7;
    }
`;
const WCAButton = styled(InfoButton)`
    background: #fa71cd; 
	background: -webkit-linear-gradient(to left, #c471f5 0%, #fa71cd 100%); 
	background: linear-gradient(to left, #c471f5 0%, #fa71cd 100%);

    &:after{
        background: #fa71cd;
    }
`;
const LargeButton = styled(InfoButton)`
    background: #ffb199; 
	background: -webkit-linear-gradient(to right, #ff0844 0%, #ffb199 100%); 
	background: linear-gradient(to right, #ff0844 0%, #ffb199 100%);

    &:after{
        background: #ff0844;
    }
`;
const CubiodButton = styled(InfoButton)`
    background: #330867; 
    background: -webkit-linear-gradient(to right, #30cfd0 0%, #330867 100%); 
    background: linear-gradient(to right, #30cfd0 0%, #330867 100%);

    &:after{
        background: #30cfd0;
    }
`;
const DetailsContainer = styled.div`
    display: flex;
	flex-direction: row;
	border-top: 1px solid lightgray;
	margin: 25px;
`;

const Details = styled.div`
    text-align: left;
	/* border-top: 1px solid lightgray; */
	margin: 25px;

    p{
        padding: 2px;
        /* text-align: center; */
        font-size: 12px;
        background: #11998e;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #38ef7d, #11998e);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #38ef7d, #11998e);
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
    }

    h5{
        /* text-align: center; */
        padding: 2px;
        font-size: 1rem;
        background: #da22ff; 
        background: -webkit-linear-gradient(to right, #9114ff, #da22ff); 
        background: linear-gradient(to right, #8f0eff, #da22ff);
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
    }
`;

const Description = styled.div`
    text-align: left;
	/* border-top: 1px solid lightgray; */
	margin: 25px;
	max-width: 200px;

    p{
        padding: 2px;
        font-size: 12px;
        /* text-align: center; */
        background: #11998e;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #38ef7d, #11998e);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #38ef7d, #11998e);
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
    }

    h5{
        /* text-align: center; */
        padding: 2px;
        /* text-align: left; */
        margin-bottom: 5px;
        font-size: 1rem;
        background: #da22ff; 
        background: -webkit-linear-gradient(to right, #9114ff, #da22ff); 
        background: linear-gradient(to right, #8f0eff, #da22ff);
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
    }
`;

//old
/* <div class='view--item'>
            <div className='view--item__container'>
                <p>{title}</p>
                <div className='view--item__info__container'>
                    <img src={image}/>
                    <div className='view--item__info'>
                        <p className='view--item__price'>
                            <small>Price: $</small>
                            <strong>{price}</strong>
                        </p>
                        <div className='view--item__rating'>
                            <p className='view--item__rating--text'>Rating:</p>
                            {Array(rating)
                                .fill()
                                .map((_, i) => (
                                <StarTwoToneIcon/>
                            ))}
                        </div>
                    </div>   
                </div> 
                <button 
                    className={ "view__" + category + ' view--item__info__btn' } 
                    onClick={addToCart}
                >
                    <span>Add to Cart</span>
                </button> 
                <div className='view--item__details__container'>
                    <div className='view--item__details'>
                        <h5>Details</h5>
                        <p>Type: {type}</p>
                        <p>Magnets: {magnets}</p>
                        <p>Size: {size}</p>
                        <p>Weight: {weight}</p>
                        <p>Released: {released}</p>
                    </div>
                    <div className='view--item__description'>
                        <h5>Description</h5>
                        <p>{description}</p>
                    </div>
                </div>
                
            </div>
        </div> */

export default ViewItem
