import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../styles.css'
import axios from '../axios.js'

const Login = ({ setCurrentUser }) => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get('/users')
            setUsers(res.data)
            //console.log(users)
        }

        fetchUsers()
    }, [])

    const signIn = (e) => {
        e.preventDefault()
        for(let i = 0; i < users.length; i++){
            if(users[i].email === email){
                if(users[i].password === password){
                    setCurrentUser(users[i])
                    console.log('Signed in successfully')
                    history.push('/')
                    return
                }else{
                    alert('incorrect password...try again')
                    return
                }
            }
        }
        alert('email is not registered')
    }

    const register = (e) => {
        e.preventDefault()
        history.push('/register')
    }

    return (
        <div className='login'>
            <Link to='/' style={{ textDecoration:'none' }}>
                <h1 className='login__logo'>CUBEsTOR</h1>
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input
                        type='text' 
                        data-lpignore='true' 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        type='password' 
                        data-lpignore='true' 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button
                        className='login__signin--btn'
                        type='submit'
                        onClick={signIn} 
                    >
                        <span>Continue</span>
                    </button>
                </form>
                <p className='login__agreement'>By continuing, you agree to CUBEsTOR's Conditions of Use and Privacy Notice.</p>
                <p className='login__option' style={{ color:'#fff' }}>&#160;OR&#160;</p>
                <button 
                    className='login__register--btn'
                    onClick={register}
                >
                    <span>Create a new account</span>
                </button>
            </div>  
        </div>
    )
}

export default Login
