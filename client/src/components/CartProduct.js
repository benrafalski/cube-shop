import '../styles.css'
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone'
import { Link } from 'react-router-dom'

const CartProduct = ({ id, title, price, rating, image, category, setItem,
                   type, magnets, size, weight, released, description }) => {


    return (
        <div className='cart__product'>
            <img src={image}/>
            <div className='cart__product__info'>
                <Link to='/products/item'>
                    <p>{title}</p>
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
           
        </div>
    )
}

export default CartProduct
