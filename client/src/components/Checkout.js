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
                <h1>
                    Checkout ({cart?.length} items) - 
                    <Link to='/cart' style={{ textDecoration:'none', color: '#000000' }}>
                        &#160;Back to Cart
                    </Link>
                </h1>
                <Section>
                    <Title>
                        <h3>Billing Address</h3>
                    </Title>
                    <Address>
                        <p>{user?.email}</p>
                        <form>
                            <select>
                                <option selected disabled>Select Country</option>
                                {countries.map(country => (
                                    <option>{country}</option>
                                ))}
                            </select>
                            <input type='text' placeholder='Street Address' data-lpignore='true'/>
                            <input type='text' placeholder='Apt Number' data-lpignore='true'/>
                            <input type='text' placeholder='City' data-lpignore='true' />
                            <input type='text' placeholder='State/County' data-lpignore='true'/>
                            <input type='text' placeholder='Zipcode' data-lpignore='true'/>
                            <input type='text' placeholder='Phone Number' data-lpignore='true'/>
                        </form>
                    </Address>
                </Section>
                <Section>
                    <Title>
                        <h3>Review Items and Delivery</h3> 
                    </Title>
                    <Items>
                        {cart.length > 0 ? (cart?.map((item) => (
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
                        ))) : <p>No Items In Cart</p>}
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
    background-color: #fff;
`;

const Container = styled.div`
    h1{
        text-align: center;
        color: #000000;
        padding: 10px;
        font-weight: 400;
        background-color: #eaeded;
        border-bottom: 1px solid #d3d3d3;
    }
`;

const Section = styled.div`
    display: flex;
    padding: 20px;
    margin: 0 20px;
    border-bottom: 1px solid #d3d3d3;
`;

const Title = styled.div`
    flex: 0.2;
`;

const Address = styled.div`
    flex: 0.8;

    form {
        width: 50%;
    }

    form > input {
        width: 100%;
    }
`;

const Items = styled.div`
    flex: 0.8;
`;

const Details = styled.div`
    flex: 0.8;

    form {
        max-width: 400px;
    }

    h4 {
        padding-bottom: 20px;
    }
`;

const PriceContainer = styled.div`
    button {
        background: #f0c14b;
        border-radius: 1px solid;
        width: 100%;
        height: 30px;
        border: 1px solid;
        margin-top: 10px;
        border-color: #a88734 #9c7e31 #846a29;
        color: #111;
    }
`;


export default Checkout
