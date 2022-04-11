import './App.css';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/userSlice';
import { auth } from './firebase';



function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        //logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
            <Route path='/'>
              <HomePage />
            </Route>
        )}
      </Router>
    </div>
  );
}

export default App;