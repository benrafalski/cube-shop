import '../styles.css'
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Product = ({ id, title, price, rating, image, category, setItem,
                   type, magnets, size, weight, released, description }) => {


    return (
        <Link 
            to={`/products/item`} 
            style={{ 
                textDecoration:'none', 
                color:"black" 
            }}
        >
            <Container
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
            >
                <img src={image}/>
                <Info>
                    <p>{title}</p>
                    <Price>
                        <small>$</small>
                        <strong>{price}</strong>
                    </Price>
                    <div>
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                            <StarTwoToneIcon/>
                        ))}
                    </div>
                </Info>

            </Container>
        </Link>
    )
}

const Container = styled.div`
    display: block;
	text-align: center;
	/* padding: 46.25%; */
	width: 100%;
	height: 100%;
	max-height: 400px;
	min-height: 200px;
    min-width: 180px;
	max-width: 300px; 
	z-index: 1;
	overflow: hidden;
	position: relative;
	border-radius: 4px;
	border: 2px solid rgba(211, 211, 211, 0.1);
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	color: rgba(0, 0, 0, 0.5);
	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;

    &:hover {
        transform: scale(1.015);
        transition: 0.3s ease-in;
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(211, 211, 211, 0.8); 
        cursor: pointer; 

        div {
            color: rgba(0, 0, 0, 0.8);
            font-weight: 300;
        }
    }

    img {
        inset: 0px;
        display: block;
        text-align: center;
        margin: auto;
        height: 100%;
        width: 100%;
        position: absolute;
        object-fit: cover;
        top: 0; 
    }

    div {
        justify-content: center;
        color: rgba(0, 0, 0, 0.5);
    }
`;
const Info = styled.div`
    width: 100%;
    height: 100px;
    margin-top: 10px;
	position: relative;
`;
const Price = styled.p`
    text-align:center;
    margin-top: 5px;
`;


// old
/* <div 
            className={category + ' product'}
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
        >
            <img src={image}/>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                        <StarTwoToneIcon/>
                    ))}
                </div>
            </div>
            <button 
                
            >
                
                
            </button>
        </div> */


export default Product
