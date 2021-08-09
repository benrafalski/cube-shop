import '../styles.css'
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone'
import { Link } from 'react-router-dom'

const Product = ({ id, title, price, rating, image, category, setItem,
                   type, magnets, size, weight, released, description }) => {


    return (
        <div className={category + ' product'}>
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
                <Link 
                    to={`/products/item`} 
                    style={{ 
                        textDecoration:'none', 
                        color:"black" 
                    }}
                >
                    View Item
                </Link>
            </button>
        </div>
    )
}

export default Product
