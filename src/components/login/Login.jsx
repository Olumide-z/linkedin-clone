import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import './login.css';

import { login } from '../../features/userSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        profileUrl: userAuth.user.photoURL
      }))
    }).catch(error => alert(error))
  };

  const register = (e) => {
    if(!name){
      return alert('Please enter a full name');
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic,
      })
      .then(() => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: profilePic,
        }))
      })
    }).catch(err => alert(err))
  };

  return (
    <div className="login">
      <img src="/images/1.png" alt="logo" />

      <form>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Full name (required if registering)'/>
        <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} type="text" placeholder='Profile pic URL (optional)'/>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email'/>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password'/>

        <button onClick={loginToApp}>Sign In</button>
      </form>

      <p>
        Not a member?{" "}
        <span className='login__register' onClick={register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login