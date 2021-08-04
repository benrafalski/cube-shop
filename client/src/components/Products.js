import { Link } from 'react-router-dom'
import '../styles.css'
import Product from './Product'

const Products = () => {
    return (
        <div className='products'>
            <div className='products__container'>
                <div className='products__btn--container'>
                    <button className="products__btn">{/* <a href="#">Contact Us</a> */}
                        <Link to='/products'>
                            <span>Back to Categories</span>
                        </Link>
                    </button>
                </div>
                <div className='products__row'>
                    <Product
                        id='12345'
                        title='GAN 356 R S, 3x3 Speed Cube Gans 356RS Magic Cube(Stickerless)'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51k6JSEUR3L._AC_SL1100_.jpg'
                    />
                    <Product
                        id='12345'
                        title='GAN 249 V2, 2x2 Speed Cube Gans Mini Cube Puzzle Toy 2x2x2 Magic Cube 49mm (Stickerless)'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/61r0ytW-klL._AC_SL1500_.jpg'
                    />
                    <Product
                        id='12345'
                        title='GAN 356 R S, 3x3 Speed Cube Gans 356RS Magic Cube(Stickerless)'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51k6JSEUR3L._AC_SL1100_.jpg'
                    />
                    <Product
                        id='12345'
                        title='GAN 356 R S, 3x3 Speed Cube Gans 356RS Magic Cube(Stickerless)'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51k6JSEUR3L._AC_SL1100_.jpg'
                    />
                </div>
                
            </div>
        </div>
    )
}

export default Products
