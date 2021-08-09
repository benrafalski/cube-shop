import '../styles.css'
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone'
import { Link } from 'react-router-dom'
import ClearIcon from '@material-ui/icons/Clear';
import { useStateValue } from '../StateProvider';

const CartProduct = ({ id, title, price, rating, image, category, setItem, type, magnets, size, weight, released, description }) => {
    const [{ cart }, dispatch] = useStateValue()

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }

    return (
        <div className='cart__product'>
            <ClearIcon 
                className='cart__delete'
                onClick={removeFromCart}
            />
            <img src={image}/>
            <div className='cart__product__info'>
                <Link to='/products/item' style={{ textDecoration:'none' }}>
                    <p className='cart__product__title'>{title}</p>
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
