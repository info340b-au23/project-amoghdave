// Login.js
import React, { useState } from 'react';
import { getDatabase, ref, child, get  } from "firebase/database";
// import firebaseApp from 'src/firebase.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const auth = getAuth(firebaseApp);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${email.split("@")[0]}`)).then((snapshot) => {
      if (snapshot.exists()) {
        if (snapshot.val().password === password) {
          sessionStorage.setItem('user', JSON.stringify({
            email,
            password
          }))
          window.location.replace("/home");
        } else {
          alert('Login data is incorrect.')
        }
      } else {
        alert('Login data is incorrect.')
      }
    }).catch((error) => {
      alert('Login data is incorrect.')
    });
  };

  return (
    <div className="login-container">
      <h1>Husky Homes</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
      <p>
        Don't have an account? <a className="register-link" href="/signup">
          Register
        </a>
      </p>
    </div>
  );
};

export default Login;