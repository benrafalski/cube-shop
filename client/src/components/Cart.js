import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import CurrencyFormat from 'react-currency-format'
import '../styles.css'
import { getCartTotal } from '../reducer'
import CartProduct from './CartProduct'

const Cart = ({ setItem }) => {
    const history = useHistory()
    const [{ cart }, dispatch] = useStateValue()

    const emptyCart = () => {
        dispatch({
            type: 'EMPTY_CART'
        })
    }

    return (
        <div className='cart'>
            <div className='cart__items'>
                <div>
                    <h1 className='shopping__cart'>Shopping Cart</h1>
                    <div>
                        {cart.length > 0 
                            ? (cart.map((item => (
                                <CartProduct
                                    setItem={setItem}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                    image={item.image}
                                    category={item.category}
                                    type={item.type}
                                    magnets={item.magnets}
                                    size={item.size}
                                    weight={item.weight}
                                    released={item.released}
                                    description={item.description}
                                />
                            ))))
                            : <p className='cart__empty--text'>Cart is Empty</p>
                        }
                    </div>
                </div>
            </div>
            <div className='cart__subtotal'>
                <div className='subtotal'>
                    <CurrencyFormat
                        renderText={(value) => (
                            <>
                                <p className='subtotal__amount'>Subtotal ({cart.length} items):<br/><p className='subtotal__currency'>{value}</p></p>
                                
                                <small 
                                    className='cart__empty'
                                    onClick={emptyCart}
                                >Empty Cart</small>
                            </>
                        )}
                        decimalScale={2}
                        value={getCartTotal(cart)}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                    />
                    <button className='subtotal__btn'>
                        <Link to='/checkout'>
                            Proceed to Checkout
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart
