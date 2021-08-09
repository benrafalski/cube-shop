import '../styles.css'
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone'
import { Link } from 'react-router-dom'
import { colors } from '@material-ui/core'
import { useStateValue } from '../StateProvider'

const ViewItem = ({ id, title, price, rating, image, category,
                    type, magnets, size, weight, released, description }) => {
    const [{ cart }, dispatch] = useStateValue()

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
        <div class='view--item'>
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
        </div>
    )
}

export default ViewItem
