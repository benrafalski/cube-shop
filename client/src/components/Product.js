import '../styles.css'
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone'

const Product = ({ id, title, price, rating, image, category }) => {

    const viewItem = () => {
        
    }

    return (
        <div 
            className={category + ' product'}
            onClick={viewItem}
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
            <button /* onClick={addToCart} */>View Item</button>
        </div>
    )
}

export default Product
