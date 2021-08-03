import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../styles.css'
import axios from '../axios.js'

const Register = () => {
    const history = useHistory()
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVerify, setPasswordVerify] = useState('')
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get('/users')
            setUsers(res.data)
            //console.log(users)
        }

        fetchUsers()
    }, [])

    const addUser = async () => {
        const res = await axios.post('/users', { email: email, username: username, firstname: firstname, lastname: lastname, password: password})
    }


    const register = (e) => {
        e.preventDefault()
        for(let i = 0; i < users.length; i++){
            if(!username || !email || !firstname || !lastname || !password || !passwordVerify){
                alert(`one (or more) required field(s) missing`)
                return
            }
            if(users[i].email === email){
                alert(`email:${email} is already in use by another account`)
                return
            }
            if(users[i].username === username){
                alert(`username:${username} is already in use by another account`)
                return
            }
            if(password.length < 6){
                alert(`password must be at least 6 characters long`)
                return
            }
            if(password !== passwordVerify){
                alert(`passwords do not match!`)
                return
            }
        }
        addUser()
        history.push('/login')
    }

    const signIn = (e) => {
        e.preventDefault()
        history.push('/login')
    }

    return (
        <div className='register'>
            <Link to='/' style={{ textDecoration:'none' }}>
                <h1 className='register__logo'>CUBEsTOR</h1>
            </Link>
            <div className='register__container'>
                <h1>Register Account</h1>
                <form>
                    <h5>Firstname<span className='required'>*</span></h5>
                    <input
                        type='text' 
                        data-lpignore='true' 
                        value={firstname}
                        onChange={e => setFirstname(e.target.value)}
                    />
                    <h5>Lastname<span className='required'>*</span></h5>
                    <input
                        type='text' 
                        data-lpignore='true' 
                        value={lastname}
                        onChange={e => setLastname(e.target.value)}
                    />
                    <h5>Email<span className='required'>*</span></h5>
                    <input
                        type='text' 
                        data-lpignore='true' 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <h5>Username<span className='required'>*</span></h5>
                    <input
                        type='text' 
                        data-lpignore='true' 
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <h5>Password<span className='required'>*</span></h5>
                    <input
                        type='password' 
                        data-lpignore='true' 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <h5>Verify Password<span className='required'>*</span></h5>
                    <input
                        type='password' 
                        data-lpignore='true' 
                        value={passwordVerify}
                        onChange={e => setPasswordVerify(e.target.value)}
                    />
                    <button
                        className='register__signin--btn'
                        type='submit'
                        onClick={register} 
                    >
                        <span>Create new account</span>
                    </button>
                </form>
                <p className='register__agreement'>By continuing, you agree to CUBEsTOR's Conditions of Use and Privacy Notice.</p>
                <p className='register__option' style={{ color:'#fff' }}>&#160;Already have an account?&#160;</p>
                <button 
                    className='register__login--btn'
                    onClick={signIn}
                >
                    <span>Sign In</span>
                </button>
            </div>
        </div>
    )
}

export default Register
