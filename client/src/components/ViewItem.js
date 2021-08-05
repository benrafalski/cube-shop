import '../styles.css'
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone'
import { Link } from 'react-router-dom'

const ViewItem = ({ id, title, price, rating, image, category }) => {
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
                            <p>Rating:</p>
                            {Array(rating)
                                .fill()
                                .map((_, i) => (
                                <StarTwoToneIcon/>
                            ))}
                        </div>
                    </div>   
                </div> 
                <button className='view--item__info__btn'>
                    <span>Add to Cart</span>
                </button> 
            </div>
        </div>
    )
}

export default ViewItem
