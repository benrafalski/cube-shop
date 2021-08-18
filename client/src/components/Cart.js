import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import CurrencyFormat from 'react-currency-format'
import '../styles.css'
import { getCartTotal } from '../reducer'
import CartProduct from './CartProduct'
import styled from 'styled-components'

const Cart = ({ setItem }) => {
    const history = useHistory()
    const [{ cart }, dispatch] = useStateValue()

    const emptyCart = () => {
        dispatch({
            type: 'EMPTY_CART'
        })
    }

    return (
        <Container>
            <Items>
                <div>
                    <ShoppingCart>
                        Shopping Cart
                    </ShoppingCart>
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
            </Items>
            <div>
                <Subtotal>
                    <CurrencyFormat
                        renderText={(value) => (
                            <>
                                <Amount>Subtotal ({cart.length} items):<br/><SubCurrency>{value}</SubCurrency></Amount>
                                
                                <EmptyCart onClick={emptyCart}>
                                    Empty Cart
                                </EmptyCart>
                            </>
                        )}
                        decimalScale={2}
                        value={getCartTotal(cart)}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                    />
                    <SubtotalButton>
                        <Link to='/checkout'>
                            Proceed to Checkout
                        </Link>
                    </SubtotalButton>
                </Subtotal>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
	padding: 20px;
	background-color: #131313;
	height: max-content;
	min-height: 500px;
    padding-bottom: 200px;
`;
const Items = styled.div`
    width: 100%;
	margin-top: 20px;
	margin-right: 20px;
`;
const ShoppingCart = styled.h1`
    background: #da22ff; 
	background: -webkit-linear-gradient(to right, #9114ff, #da22ff); 
	background: linear-gradient(to right, #8f0eff, #da22ff);
	background-size: 100%;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
    letter-spacing: 3px;
	margin-right: 10px;
	padding: 10px;
	padding-bottom: 20px;
	border-bottom: 1px solid lightgray;
    color: white;
`;
const Empty = styled.p`
    color: #fff;
	margin-left: 20px;
	padding: 10px;
`;
const CartSubtotal = styled.div``;
const Subtotal = styled.div`
    display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	text-align: center;
    font-size: 18px;
	width: 250px;
    height: 250px;
    padding: 20px;
    background-color: #131313;
    border: 1px solid lightgray;
    border-radius: 3px;
    letter-spacing: 2px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;

`;
const Amount = styled.p`
    background: #11998e;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #38ef7d, #11998e);  /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to right, #38ef7d, #11998e);
	background-size: 100%;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
`;

const SubCurrency = styled.p`
    margin-top: 2px;
    font-weight: bold;
`;

const EmptyCart = styled.small`
    display: flex;
	align-items: center;
	margin: 2px;
	margin-top: 20px;
	background: #11998e;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #38ef7d, #11998e);  /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to right, #38ef7d, #11998e);
	background-size: 100%;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
    letter-spacing: 2px;


    &:hover {
        background: #0f857b;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to left, #38ef7d, #11998e);
        background: linear-gradient(to left, #38ef7d, #11998e);
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
        cursor: pointer;
    }
`;
const SubtotalButton = styled.button`
    width: 100%;
    height: 50px;
    margin-top: 10px;
	color: #fff;
	background: #59C173; 
	background: -webkit-linear-gradient(to left, #5D26C1, #a17fe0, #59C173); 
	background: linear-gradient(to left, #5D26C1, #a17fe0, #59C173);
	border: none;
	border-radius: 4px;
	cursor: pointer;
	position: relative;
	transition: all 0.35s;
	outline: none;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
    background: #131313;
    color: #a17fe0;
    text-transform: uppercase;
    letter-spacing: 4px;
    border: 2px solid;

    a{
        position: relative;
        z-index: 2;
        color: #a17fe0;
        text-decoration: none;
    }

    /* &:after{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: #00F260;
        transition: all 0.35s;
        border-radius: 4px;
    } */

    &:hover{
        background-color: #5D26C1;
        color: #a17fe0;
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scale(1.015);
    }

    /* :hover:after{
        width: 100%;
    } */


`;

//old 
/* <div className='cart'>
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
        </div> */

export default Cart
