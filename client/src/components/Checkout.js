import { Link } from 'react-router-dom'
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { getCartTotal } from '../reducer'
import { useStateValue } from '../StateProvider'
import axios from '../axios.js'
import { useHistory } from 'react-router'
import styled from "styled-components"
import CartProduct from './CartProduct'

const Checkout = ({ setItem }) => {
    const history = useHistory()
    const [{ cart, user }, dispatch] = useStateValue()
    const [error, setError] = useState(null)
    const [processing, setProcessing] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [succeeded, setSucceeded] = useState(false)
    const [clientSecret, setClientSecret] = useState(true)
    const stripe = useStripe()
    const elements = useElements()

    const countries = [
        'Argentina', 
        'Australia', 
        'Austria', 
        'Belgium', 
        'Canada', 
        'China',
        'Denmark',
        'Finland',
        'France',
        'Germany',
        'Greece',
        'Hungary',
        'Italy',
        'Japan',
        'Luxembourg',
        'Netherlands',
        'New Zealand',
        'Norway',
        'Poland',
        'Portugal',
        'Russia',
        'Singapore',
        'Spain',
        'Sweden',
        'Taiwan',
        'Thailand',
        'United Kingdom (UK)',
        'United States (US)',
        'Vietman'
    ]

    


    //console.log({ email: (user ? user.email : 'Guest-Purchase'), amount: getCartTotal(cart) ,cart: cart ,created: 'gg' ,clientSecret: clientSecret})
    const addOrder = async ( paymentCreated ) => {
        const res = await axios.post('/orders', { 
            email: (user ? user.email : 'Guest-Purchase'), 
            amount: getCartTotal(cart) ,
            cart: cart ,
            created: paymentCreated ,
            clientSecret: clientSecret
        })
    }

    useEffect(() => {
        const getClientSecret = async () => {
            // stripe expects payment method in cents
            try {
                const res = await axios.post('/payments/create', { 
                    total: Math.ceil(getCartTotal(cart) * 100) 
                })
                setClientSecret(res.data.clientSecret)
            } catch(err){
                console.log(err)
            }
        }

        getClientSecret()
    }, [cart])

    //console.log(clientSecret)
    //console.log(cart[0].id)

    const handleSubmit = async (e) => {
        // stipe stuff here 
        e.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //console.log(paymentIntent.created)
            // payment intent = payment confirmation
            // db.collection('users').doc(user?.id).collection('orders').doc(paymentIntent.id).set({
            //     cart: cart,
            //     amount: paymentIntent.amount,
            //     created: paymentIntent.created
            // })
            addOrder(paymentIntent.created)

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_CART'
            })
            
            history.replace('/')
            history.replace('/orders')
        }) 
    }

    //console.log({ email: user?.email, amount: getCartTotal(cart) ,cart: cart ,created: 'hi' ,clientSecret: clientSecret})
    const handleChange = (e) => {
        // listen for changes in card element
        // display any errors as the customer types thier card details
        setDisabled(e.empty)
        setError(e.error && e.error.message)
    }

    return (
        <Payment>
            <Container>
                <Top>
                    <h1>
                        Checkout ({cart?.length} items)<br/>
                        <Link to='/cart' style={{  }}>
                        Back to Cart
                        </Link>
                    </h1>
                </Top>
                <Section>
                    <Title>
                        <h3>Billing Address</h3>
                    </Title>
                    <Address>
                        <p>{user?.email}</p>
                        <form>
                            <h5>Country</h5>
                            <select>
                                <option selected disabled>Select Country</option>
                                {countries.map(country => (
                                    <option>{country}</option>
                                ))}
                            </select>
                            <h5>Address</h5>
                            <input type='text' placeholder='Street Address' data-lpignore='true'/>
                            <input type='text' placeholder='Apt Number' data-lpignore='true'/>
                            <input type='text' placeholder='City' data-lpignore='true' />
                            <input type='text' placeholder='State/County' data-lpignore='true'/>
                            <input type='text' placeholder='Zipcode' data-lpignore='true'/>
                            <h5>Contact Info</h5>
                            <input type='text' placeholder='Phone Number' data-lpignore='true'/>
                        </form>
                    </Address>
                </Section>
                <Section>
                    <Title>
                        <h3>Review Items and Delivery</h3> 
                    </Title>
                    <Items> 
                        {cart.length > 0 ? ( 
                            <>
                                <Products>
                                    <h7>Products</h7>
                                    {cart.map((product => (
                                        <p><img src={product.image}/>{product.title}</p>
                                    )))}
                                </Products>
                                <Prices>
                                    <h7>Prices</h7>
                                    {cart.map((product => (
                                        <p>${product.price}</p>
                                    )))}
                                </Prices>
                            </>
                        ) : <p>No Items In Cart</p>}
                    </Items>
                </Section>
                <Section>
                    <Title>
                        <h3>Payment Method</h3>
                    </Title>
                    <Details>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <PriceContainer>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing...</p> : 'Buy Now'}</span>
                                </button>
                            </PriceContainer>
                            {error && <div>{error}</div>}
                        </form>
                    </Details>
                </Section>
            </Container>
        </Payment>
    )
}

const Payment = styled.div`
    background: linear-gradient(to right, #161616, #000000);
`;

const Container = styled.div`
    background: linear-gradient(to left, #131313, #161616);

    h1{
        text-align: center;
        color: #fff;
        padding: 10px;
        font-weight: 400;
        background: linear-gradient(to right, #161616, #000000);
        border-bottom: 1px solid #d3d3d3;
    }
`;

const Top = styled.div`
    a {
        border: 2px solid;
        font-size: 18px;
        outline: none;
        text-transform: uppercase;
        letter-spacing: 4px;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        width: 400px;
        margin: auto;
        margin-top: 20px;
        padding: 10px 20px;
        color: #fff;
        transition: all 0.3s ease-in;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
        background: #131313;
        color: #a17fe0;
        margin-bottom: 30px;

        &:hover {
            background-color: #5D26C1;
            color: #a17fe0;
            box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scale(1.015);
        }
    }
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 0 20px;
    border-bottom: 1px solid #d3d3d3;
`;

const Title = styled.div`
    flex: 0.2;
    color: #fff;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid lightgray;
    
`;

const Address = styled.div`
    flex: 0.8;

    form {
        width: 500px;

        @media screen and (max-width: 600px){
            width: 450px;
        }
    }

    form > h5 {
        margin-bottom: 5px;
        /* text-align: center; */
        background: #da22ff;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #9114ff, #da22ff);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #8f0eff, #da22ff);
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
    }

    form > input, select {
        width: 100%;
        height: 30px;
        margin-bottom: 5px;
        border-radius: 3px;
        border-style: solid;
        background-color: #111111;
        width: 98%;
        color: #fff;
    }
`;

const Items = styled.div`
    flex: 0.8;
    color: #fff;
    display: flex
`;

const Details = styled.div`
    flex: 0.8;
    color: #fff;

    form {
        max-width: 400px;
        color: #fff;
    }

    form > h3 {
        margin-top: 400px;
    }

    h4 {
        margin-top: 10px;
        padding-bottom: 20px;
    }

`;

const Products = styled.div`
    border: 1px solid #fff;
    border-radius: 4px 0px 0px 4px;
    text-align: center;

    img {
        width: 25px;
        height: 25px;
    }

    h7{
        border-bottom: 1px solid #fff;
    }

    p {
        width: 100%;
        height: 30px;
    }

`;
const Prices = styled.div`
    border: 1px solid #fff;
    border-radius: 0px 4px 4px 0px;
    text-align: center;

    h7{
        border-bottom: 1px solid #fff;
        margin-bottom: 12px;
    }

    p {
        width: 100%;
        height: 30px;
        
    }
`;

const PriceContainer = styled.div`
    button {
        width: 100%;
        height: 30px;
        border: 2px solid;
        font-size: 18px;
        outline: none;
        text-transform: uppercase;
        letter-spacing: 4px;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        margin: auto;
        margin-top: 10px;
        padding: 10px 20px;
        color: #fff;
        transition: all 0.3s ease-in;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
        background: #131313;
        color: #a17fe0;

        &:hover {
            background-color: #5D26C1;
            color: #a17fe0;
            box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scale(1.015);
        }
    }

    form > div > div > span > span > div > div > span {
        color: #fff;
    }
`;


export default Checkout
