import {useEffect} from 'react';
import './App.css';
import Feed from './components/feed/Feed';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

import {useSelector, useDispatch} from 'react-redux';
import Login from './components/login/Login';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import Widget from './components/widget/Widget';

function App() {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      }else{
        // user is logged out
        dispatch(logout());
      }
    })
  }, []);

  return (
    <div className="app">
      {/* Header */}
        <Header />
        {!user ? (
          <Login />
        ): (
          <div className='app__body'>
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widget />
      </div>
        )}
      {/* App Body */}
      
    </div>
  );
}

export default App;
