import '../styles.css'
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone'
import { Link } from 'react-router-dom'
import ClearIcon from '@material-ui/icons/Clear';
import { useStateValue } from '../StateProvider';
import styled from 'styled-components'

const CartProduct = ({ id, title, price, rating, image, category, setItem, type, magnets, size, weight, released, description, component }) => {
    const [{ cart }, dispatch] = useStateValue()

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }

    return (
        <Product>
            {component === 'cart' && <Delete onClick={removeFromCart}/>}
            {component !== 'cart' ? 
                <img style={{ width:'4%' }} src={image}/> :
                <img src={image}/>
            }
            <Info>
                {
                    component === 'cart'
                        ?  
                            <Link to='/products/item' style={{ textDecoration:'none' }}>
                                <Title
                                    onClick={e => setItem({
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
                                    })}
                                >{title}</Title>
                            </Link>
                        : 
                            <p style={{ color:'#fff' }}>{title}</p>
                }
                <Price>
                    <small>$</small>
                    <strong>{price}</strong>
                </Price>
                {component === 'cart' &&
                    <Rating>
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                            <StarTwoToneIcon/>
                        ))}
                    </Rating>
                }
            </Info>
        </Product>
    )
}

const Product = styled.div`
     display: flex;
    flex-direction: row;
    align-items: center;
	text-align: center;
    justify-content: space-between;
    margin: 10px;
    padding: 10px;
    width: 100%;
    max-height: 400px;
    min-width: 400px;
	max-width: 800px;
    z-index: 1;
	/* border: 1px solid lightgray; */
	border-radius: 4px;
	transition: 0.3s ease-in;
	color: #fff;
	background: linear-gradient(to left, #131313, #111111);
    /* box-shadow: rgb(0 0 0 / 9%) 0px 26px 30px -10px, rgb(0 0 0 /3%) -15px 10px 0px 0px; */

    &:hover{
        transform: scale(1.015);
        transition: 0.3s ease-in;
    }

    img {
        max-height: 180px;
        width: 100%;
        height: auto;
        object-fit: contain;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    button {
        color: #000;
        padding: 10px 24px;
        border: none;
        outline: none;
        border-radius: 4px;
        background: #fff;
        font-size: 12px;
        text-decoration: none;
        margin-bottom: 5px;
        margin-top: 35px;
    }
`;
const Delete = styled(ClearIcon)`
    color: rgb(255, 0, 55);

    &:hover{
        color: rgb(177, 0, 38);
    }
`;
const Info = styled.div`
    width: 100%;
    height: 100px;
    margin-top: 30px;
    color: white;
	/* background: #da22ff; 
	background: -webkit-linear-gradient(to right, #9114ff, #da22ff); 
	background: linear-gradient(to right, #8f0eff, #da22ff);
	background-size: 100%;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent; */
`;
const Title = styled.p`
    color: #fff;

    &:hover{
        /* background: #9114ff; 
        background: -webkit-linear-gradient(to left, #9114ff, #da22ff); 
        background: linear-gradient(to left, #8f0eff, #da22ff);
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent; */
        color: gray;
    }
`;
const Price = styled.p`
    letter-spacing: 2px;
    text-align:center;
    margin-top: 5px;
`;
const Rating = styled.div`
    display: flex;
    color: #fff;
	display: flex;
	justify-content: center;
`;


//old
/* <div className='cart__product'>
            <ClearIcon 
                className='cart__delete'
                onClick={removeFromCart}
            />
            <img src={image}/>
            <div className='cart__product__info'>
                <Link to='/products/item' style={{ textDecoration:'none' }}>
                    <p 
                        className='cart__product__title'
                        onClick={e => setItem({
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
                        })}
                    >{title}</p>
                </Link>
                <p className='cart__product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='cart__product__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                        <StarTwoToneIcon/>
                    ))}
                </div>
            </div>
           
        </div> */


export default CartProduct
