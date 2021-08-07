import { Link } from 'react-router-dom'
import '../styles.css'
import Product from './Product'

const Products = ({ page, setItem }) => {
    return (
        <div className='products'>
            <div className='products__container'>
                <div className='products__btn--container'>
                    <button className="products__btn">{/* <a href="#">Contact Us</a> */}
                        <Link to='/categories'>
                            <span>View Categories</span>
                        </Link>
                    </button>
                </div>
                {(page === 'speedcubes') &&
                <div className='products__row'>
                    <Product
                        id='12345'
                        title='GAN 356 Magnetic 3x3 (Stickerless)'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51k6JSEUR3L._AC_SL1100_.jpg'
                        category={page}
                        setItem={setItem}
                        type={'3x3'}
                        magnets={'moderate'}
                        size={'56mm'}
                        weight={'74g'}
                        released={"03/05/2020"}
                        description={'The GAN Magnetic 3x3 (356M) is the perfect middle-ground between the top 3x3 models! While the magnet strength is not adjustable you will still find plenty of adjustment options through the dual-adjustment Numerical IPG core and alternate GES spring options.'}
                    />
                    <Product
                        id='12345'
                        title='GAN 356 Magnetic 3x3 (Stickerless)'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51k6JSEUR3L._AC_SL1100_.jpg'
                        category={page}
                        setItem={setItem}
                        type={'3x3'}
                        magnets={'moderate'}
                        size={'56mm'}
                        weight={'74g'}
                        released={"03/05/2020"}
                        description={'The GAN Magnetic 3x3 (356M) is the perfect middle-ground between the top 3x3 models! While the magnet strength is not adjustable you will still find plenty of adjustment options through the dual-adjustment Numerical IPG core and alternate GES spring options.'}
                    />
                    <Product
                        id='12345'
                        title='GAN 356 Magnetic 3x3 (Stickerless)'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51k6JSEUR3L._AC_SL1100_.jpg'
                        category={page}
                        setItem={setItem}
                        type={'3x3'}
                        magnets={'moderate'}
                        size={'56mm'}
                        weight={'74g'}
                        released={"03/05/2020"}
                        description={'The GAN Magnetic 3x3 (356M) is the perfect middle-ground between the top 3x3 models! While the magnet strength is not adjustable you will still find plenty of adjustment options through the dual-adjustment Numerical IPG core and alternate GES spring options.'}
                    />
                    <Product
                        id='12345'
                        title='GAN 356 Magnetic 3x3 (Stickerless)'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51k6JSEUR3L._AC_SL1100_.jpg'
                        category={page}
                        setItem={setItem}
                        type={'3x3'}
                        magnets={'moderate'}
                        size={'56mm'}
                        weight={'74g'}
                        released={"03/05/2020"}
                        description={'The GAN Magnetic 3x3 (356M) is the perfect middle-ground between the top 3x3 models! While the magnet strength is not adjustable you will still find plenty of adjustment options through the dual-adjustment Numerical IPG core and alternate GES spring options.'}
                    />
                </div>}
                {(page === 'wca-puzzles') &&
                <div className='products__row'>
                    <Product
                        id='12345'
                        title='GAN 249 V2 M 2x2 (Stickerless)'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/61r0ytW-klL._AC_SL1500_.jpg'
                        category={page}
                        setItem={setItem}
                        type={'2x2'}
                        magnets={'light'}
                        size={'49mm'}
                        weight={'54g'}
                        released={"12/20/17"}
                        description={'The GAN 249 V2 M 2x2 is the updated version of the popular 249. The V2 M comes with a brighter colored tiles, primary internals, and magnets pre-installed. One of the most notable features of the 249 V2 M is the honeycomb design that is intended to to create a smoother feel and prolong the life of lubricant. The addition of magnets helps to improve control and overall stability when speedsolving!'}
                    />
                    <Product
                        id='12345'
                        title='GAN 249 V2 M 2x2 (Stickerless)'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/61r0ytW-klL._AC_SL1500_.jpg'
                        category={page}
                        setItem={setItem}
                        type={'2x2'}
                        magnets={'light'}
                        size={'49mm'}
                        weight={'54g'}
                        released={"12/20/17"}
                        description={'The GAN 249 V2 M 2x2 is the updated version of the popular 249. The V2 M comes with a brighter colored tiles, primary internals, and magnets pre-installed. One of the most notable features of the 249 V2 M is the honeycomb design that is intended to to create a smoother feel and prolong the life of lubricant. The addition of magnets helps to improve control and overall stability when speedsolving!'}
                    />
                    <Product
                        id='12345'
                        title='GAN 249 V2 M 2x2 (Stickerless)'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/61r0ytW-klL._AC_SL1500_.jpg'
                        category={page}
                        setItem={setItem}
                        type={'2x2'}
                        magnets={'light'}
                        size={'49mm'}
                        weight={'54g'}
                        released={"12/20/17"}
                        description={'The GAN 249 V2 M 2x2 is the updated version of the popular 249. The V2 M comes with a brighter colored tiles, primary internals, and magnets pre-installed. One of the most notable features of the 249 V2 M is the honeycomb design that is intended to to create a smoother feel and prolong the life of lubricant. The addition of magnets helps to improve control and overall stability when speedsolving!'}
                    />
                    <Product
                        id='12345'
                        title='GAN 249 V2 M 2x2 (Stickerless)'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/61r0ytW-klL._AC_SL1500_.jpg'
                        category={page}
                        setItem={setItem}
                        type={'2x2'}
                        magnets={'light'}
                        size={'49mm'}
                        weight={'54g'}
                        released={"12/20/17"}
                        description={'The GAN 249 V2 M 2x2 is the updated version of the popular 249. The V2 M comes with a brighter colored tiles, primary internals, and magnets pre-installed. One of the most notable features of the 249 V2 M is the honeycomb design that is intended to to create a smoother feel and prolong the life of lubricant. The addition of magnets helps to improve control and overall stability when speedsolving!'}
                    />
                </div>}
                {(page === 'large-puzzles') &&
                <div className='products__row'>
                    <Product
                        id='12345'
                        title='YuXin Little Magic 8x8'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51gXoyks6QL._AC_SL1000_.jpg'
                        category={page}
                        setItem={setItem}
                        type={'8x8'}
                        magnets={'none'}
                        size={'88mm'}
                        weight={'454g'}
                        released={"08/20/19"}
                        description={'The YuXin Little Magic 8x8 is a larger size budget-friendly 8x8 featuring buttery smooth turning and beautiful color shades. Coming in at 88mm in size the Little Magic 8x8 is by no means little and as a result, has bigger pieces that may be more comfortable for some.'}
                    />
                    <Product
                        id='12345'
                        title='YuXin Little Magic 8x8'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51gXoyks6QL._AC_SL1000_.jpg'
                        category={page}
                        setItem={setItem}
                        type={'8x8'}
                        magnets={'none'}
                        size={'88mm'}
                        weight={'454g'}
                        released={"08/20/19"}
                        description={'The YuXin Little Magic 8x8 is a larger size budget-friendly 8x8 featuring buttery smooth turning and beautiful color shades. Coming in at 88mm in size the Little Magic 8x8 is by no means little and as a result, has bigger pieces that may be more comfortable for some.'}
                    />
                    <Product
                        id='12345'
                        title='YuXin Little Magic 8x8'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51gXoyks6QL._AC_SL1000_.jpg'
                        category={page}
                        setItem={setItem}
                        type={'8x8'}
                        magnets={'none'}
                        size={'88mm'}
                        weight={'454g'}
                        released={"08/20/19"}
                        description={'The YuXin Little Magic 8x8 is a larger size budget-friendly 8x8 featuring buttery smooth turning and beautiful color shades. Coming in at 88mm in size the Little Magic 8x8 is by no means little and as a result, has bigger pieces that may be more comfortable for some.'}
                    />
                    <Product
                        id='12345'
                        title='YuXin Little Magic 8x8'
                        price={15.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51gXoyks6QL._AC_SL1000_.jpg'
                        category={page}
                        setItem={setItem}
                        type={'8x8'}
                        magnets={'none'}
                        size={'88mm'}
                        weight={'454g'}
                        released={"08/20/19"}
                        description={'The YuXin Little Magic 8x8 is a larger size budget-friendly 8x8 featuring buttery smooth turning and beautiful color shades. Coming in at 88mm in size the Little Magic 8x8 is by no means little and as a result, has bigger pieces that may be more comfortable for some.'}
                    />
                </div>}
                {(page === 'cuboid') &&
                <div className='products__row'>
                    <Product
                        id='12345'
                        title='Cube4You Fully Fuctional 3x3x4'
                        price={12.95}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/61FeSK-h+vL._AC_SL1000_.jpg'
                        category={page}
                        setItem={setItem}
                        type={'3x3x4'}
                        magnets={'none'}
                        size={'60mm'}
                        weight={'122g'}
                        released={"unknown"}
                        description={'This is the Cube4You Fully Functional 3x3x4. This 3x3x4 is made by Cube4You and has very smooth rotation on all layers.'}
                    />
                    <Product
                        id='12345'
                        title='Cube4You Fully Fuctional 3x3x4'
                        price={12.95}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/61FeSK-h+vL._AC_SL1000_.jpg'
                        category={page}
                        setItem={setItem}
                        type={'3x3x4'}
                        magnets={'none'}
                        size={'60mm'}
                        weight={'122g'}
                        released={"unknown"}
                        description={'This is the Cube4You Fully Functional 3x3x4. This 3x3x4 is made by Cube4You and has very smooth rotation on all layers.'}
                    />
                    <Product
                        id='12345'
                        title='Cube4You Fully Fuctional 3x3x4'
                        price={12.95}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/61FeSK-h+vL._AC_SL1000_.jpg'
                        category={page}
                        setItem={setItem}
                        type={'3x3x4'}
                        magnets={'none'}
                        size={'60mm'}
                        weight={'122g'}
                        released={"unknown"}
                        description={'This is the Cube4You Fully Functional 3x3x4. This 3x3x4 is made by Cube4You and has very smooth rotation on all layers.'}
                    />
                    <Product
                        id='12345'
                        title='Cube4You Fully Fuctional 3x3x4'
                        price={12.95}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/61FeSK-h+vL._AC_SL1000_.jpg'
                        category={page}
                        setItem={setItem}
                        type={'3x3x4'}
                        magnets={'none'}
                        size={'60mm'}
                        weight={'122g'}
                        released={"unknown"}
                        description={'This is the Cube4You Fully Functional 3x3x4. This 3x3x4 is made by Cube4You and has very smooth rotation on all layers.'}
                    />
                </div>}
            </div>
        </div>
    )
}

export default Products
