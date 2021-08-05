import { Link } from 'react-router-dom'
import '../styles.css'
import Product from './Product'

const Products = ({ page, setCategory, setItem }) => {
    return (
        <div className='products'>
            <div className='products__container'>
                <div className='products__btn--container'>
                    <button className="products__btn" onClick={e => setCategory('')}>{/* <a href="#">Contact Us</a> */}
                        <Link to='/products'>
                            <span>View Categories</span>
                        </Link>
                    </button>
                </div>
                {(page === 'speedcubes') &&
                <div className='products__row'>
                    <Product
                        id='12345'
                        title='GAN 356 R S, 3x3 Speed Cube Gans 356RS Magic Cube(Stickerless)'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51k6JSEUR3L._AC_SL1100_.jpg'
                        category={page}
                        setItem={setItem}
                    />
                    <Product
                        id='12345'
                        title='GAN 356 R S, 3x3 Speed Cube Gans 356RS Magic Cube(Stickerless)'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51k6JSEUR3L._AC_SL1100_.jpg'
                        category={page}
                        setItem={setItem}
                    />
                    <Product
                        id='12345'
                        title='GAN 356 R S, 3x3 Speed Cube Gans 356RS Magic Cube(Stickerless)'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51k6JSEUR3L._AC_SL1100_.jpg'
                        category={page}
                        setItem={setItem}
                    />
                    <Product
                        id='12345'
                        title='GAN 356 R S, 3x3 Speed Cube Gans 356RS Magic Cube(Stickerless)'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51k6JSEUR3L._AC_SL1100_.jpg'
                        category={page}
                        setItem={setItem}
                    />
                </div>}
                {(page === 'wca-puzzles') &&
                <div className='products__row'>
                    <Product
                        id='12345'
                        title='GAN 249 V2, 2x2 Speed Cube Gans Mini Cube Puzzle Toy 2x2x2 Magic Cube 49mm (Stickerless)'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/61r0ytW-klL._AC_SL1500_.jpg'
                        category={page}
                        setItem={setItem}
                    />
                    <Product
                        id='12345'
                        title='GAN 249 V2, 2x2 Speed Cube Gans Mini Cube Puzzle Toy 2x2x2 Magic Cube 49mm (Stickerless)'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/61r0ytW-klL._AC_SL1500_.jpg'
                        category={page}
                        setItem={setItem}
                    />
                    <Product
                        id='12345'
                        title='GAN 249 V2, 2x2 Speed Cube Gans Mini Cube Puzzle Toy 2x2x2 Magic Cube 49mm (Stickerless)'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/61r0ytW-klL._AC_SL1500_.jpg'
                        category={page}
                        setItem={setItem}
                    />
                    <Product
                        id='12345'
                        title='GAN 249 V2, 2x2 Speed Cube Gans Mini Cube Puzzle Toy 2x2x2 Magic Cube 49mm (Stickerless)'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/61r0ytW-klL._AC_SL1500_.jpg'
                        category={page}
                        setItem={setItem}
                    />
                </div>}
                {(page === 'large-puzzles') &&
                <div className='products__row'>
                    <Product
                        id='12345'
                        title='BestCube 8x8 Cube Stickerless Classroom MF8 Meilong 8x8x8 Speed Cube Puzzle Gifts Toys(70mm)'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51ulm61ez3L._AC_SL1000_.jpg'
                        category={page}
                        setItem={setItem}
                    />
                    <Product
                        id='12345'
                        title='BestCube 8x8 Cube Stickerless Classroom MF8 Meilong 8x8x8 Speed Cube Puzzle Gifts Toys(70mm)'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51ulm61ez3L._AC_SL1000_.jpg'
                        category={page}
                        setItem={setItem}
                    />
                    <Product
                        id='12345'
                        title='BestCube 8x8 Cube Stickerless Classroom MF8 Meilong 8x8x8 Speed Cube Puzzle Gifts Toys(70mm)'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51ulm61ez3L._AC_SL1000_.jpg'
                        category={page}
                        setItem={setItem}
                    />
                    <Product
                        id='12345'
                        title='BestCube 8x8 Cube Stickerless Classroom MF8 Meilong 8x8x8 Speed Cube Puzzle Gifts Toys(70mm)'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51ulm61ez3L._AC_SL1000_.jpg'
                        category={page}
                        setItem={setItem}
                    />
                </div>}
                {(page === 'cuboid') &&
                <div className='products__row'>
                    <Product
                        id='12345'
                        title='Cuberspeed YiSheng 3x3x4 Fully Functional Cuboid stickerless Cube'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51ahQnT3kaS._AC_SL1500_.jpg'
                        category={page}
                        setItem={setItem}
                    />
                    <Product
                        id='12345'
                        title='Cuberspeed YiSheng 3x3x4 Fully Functional Cuboid stickerless Cube'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51ahQnT3kaS._AC_SL1500_.jpg'
                        category={page}
                        setItem={setItem}
                    />
                    <Product
                        id='12345'
                        title='Cuberspeed YiSheng 3x3x4 Fully Functional Cuboid stickerless Cube'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51ahQnT3kaS._AC_SL1500_.jpg'
                        category={page}
                        setItem={setItem}
                    />
                    <Product
                        id='12345'
                        title='Cuberspeed YiSheng 3x3x4 Fully Functional Cuboid stickerless Cube'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51ahQnT3kaS._AC_SL1500_.jpg'
                        category={page}
                        setItem={setItem}
                    />
                </div>}
            </div>
        </div>
    )
}

export default Products
