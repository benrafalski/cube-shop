import { useHistory } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import CurrencyFormat from 'react-currency-format'
import '../styles.css'
import { getCartTotal } from '../reducer'

const Cart = () => {
    const history = useHistory()
    const [{ cart }, dispatch] = useStateValue()

    return (
        <div className='cart'>
            <div className='cart__items'>
                <div>
                    <h1 className='shopping__cart'>Shopping Cart</h1>
                    <div>
                        {cart.length > 0 
                            ? <h1>Items should show {cart.length}</h1>
                            : <p>Cart is Empty</p>
                        }
                    </div>
                </div>
            </div>
            <div className='cart__subtotal'>
                <div className='subtotal'>
                    <CurrencyFormat
                        renderText={(value) => (
                            <>
                                <p>Subtotal ({cart.length} items):</p>
                                <p>{value}</p>
                                <small className='cart__empty'>Empty Cart</small>
                            </>
                        )}
                        decimalScale={2}
                        value={getCartTotal(cart)}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                    />
                    <button onClick={e => history.push('/checkout')}>
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart
