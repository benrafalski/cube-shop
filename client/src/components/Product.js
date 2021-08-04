import '../styles.css'
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone'

const Product = ({ id, title, price, rating, image, category }) => {
    return (
        <div className='product'>
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
            <button /* onClick={addToCart} */>Add to Cart</button>
        </div>
    )
}

export default Product
