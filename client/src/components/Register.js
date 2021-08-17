import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../styles.css'
import axios from '../axios.js'
import styled from 'styled-components'

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
        <Reg>
            <Link to='/' style={{ textDecoration:'none' }}>
                <Logo>CUBEsTOR</Logo>
            </Link>
            <Container>
            <h1>Register Account</h1>
                <form>
                    <h5>Firstname<Required>*</Required></h5>
                    <input
                        type='text' 
                        data-lpignore='true' 
                        value={firstname}
                        onChange={e => setFirstname(e.target.value)}
                    />
                    <h5>Lastname<Required>*</Required></h5>
                    <input
                        type='text' 
                        data-lpignore='true' 
                        value={lastname}
                        onChange={e => setLastname(e.target.value)}
                    />
                    <h5>Email<Required>*</Required></h5>
                    <input
                        type='text' 
                        data-lpignore='true' 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <h5>Username<Required>*</Required></h5>
                    <input
                        type='text' 
                        data-lpignore='true' 
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <h5>Password<Required>*</Required></h5>
                    <input
                        type='password' 
                        data-lpignore='true' 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <h5>Verify Password<Required>*</Required></h5>
                    <input
                        type='password' 
                        data-lpignore='true' 
                        value={passwordVerify}
                        onChange={e => setPasswordVerify(e.target.value)}
                    />
                    <RegisterButton
                        type='submit'
                        onClick={register} 
                    >
                        <span>Create new account</span>
                    </RegisterButton>
                </form>
                <Agreement>
                    By continuing, you agree to CUBEsTOR's Conditions of Use and Privacy Notice.
                </Agreement>
                <Option>
                    &#160;Already have an account?&#160;
                </Option>
                <LoginButton onClick={signIn}>
                    <span>Sign In</span>
                </LoginButton>
            </Container>
        </Reg>
    )
}

const Reg = styled.div`
    display: flex;
	flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: #fff;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	scroll-behavior: smooth;
	background: linear-gradient(to right, #161616, #000000);
`;
const Logo = styled.h1`
    background-color: #a8ff78;
	background-image: linear-gradient(to top, #78ffd6 0%, #a8ff78 100%);
	background-size: 100%;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	display: flex;
	align-items: center;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	margin-top: 20px;
	margin-bottom: 20px;
`;
const Container = styled.div`
    width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 20px;
	background: #131313;

    h1 {
        font-weight: 500;
        margin-bottom: 20px;
        color: #fff;
        text-align: center;
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

    form > input {
        height: 30px;
        margin-bottom: 5px;
        border-radius: 3px;
        border-style: solid;
        background-color: #111111;
        width: 98%;
        color: #fff;
    }
`;
const Required = styled.span`
    margin-bottom: 5px;
	/* text-align: center; */
	background: #fff;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #fff, #fff);  /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to right, #fff, #fff);
	background-size: 100%;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
`;
const LoginButton = styled.button`
    width: 100%;
	height: 30px;
	padding: 0 1rem;
	border: none;
	border-radius: 4px;
	margin-top: 1rem;
	cursor: pointer;
	position: relative;
	transition: all 0.35s;
	outline: none;

    span{
        position: relative;
        z-index: 2;
        color: #111111;
        text-decoration: none;
    }

    &:after{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: #777;
        transition: all 0.35s;
        border-radius: 4px;
    }

    &:hover{
        color: #fff;
    }

    &:hover:after{
        width: 100%;
        height: 30px;
    }
`;
const Agreement = styled.p`
    margin-top: 15px;
	text-align: center;
    font-size: 12px;
	background: #11998e;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #38ef7d, #11998e);  /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to right, #38ef7d, #11998e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	background-size: 100%;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
`;
const Option = styled.p`
    display: flex;
	flex-direction: row;
	margin-top: 10px;
    color: #fff;
	background: #fff;  /* fallback for old browsers */
	background-size: 100%;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;

    &:before, &:after{
        content: "";
        flex: 1 1;
        border-bottom: 2px solid;
        border-color: #fff;
        margin: auto;
        padding: 1px;
    }
`;
const RegisterButton = styled.button`
    background: #59C173; 
	background: -webkit-linear-gradient(to left, #5D26C1, #a17fe0, #59C173); 
	background: linear-gradient(to left, #5D26C1, #a17fe0, #59C173);
	width: 98%;
	height: 30px;
	padding: 0 1rem;
	border: none;
	border-radius: 4px;
	margin-top: 1rem;
	cursor: pointer;
	position: relative;
	transition: all 0.35s;
	outline: none;

    span{
        position: relative;
        z-index: 2;
        color: #fff;
        text-decoration: none;
    }

    &:after{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: #00F260;
        transition: all 0.35s;
        border-radius: 4px;
    }

    &:hover{
        color: #fff;
    }

    &:hover:after{
        width: 100%;
        height: 30px;
    }
`;

//old 
/*  
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
        </div>*/

export default Register
