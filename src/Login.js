import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    console.log("username: ", username);
    console.log("password: ", password);
    navigate('/home');
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.login}>
        <form onSubmit={handleSubmit}>
          <h1 className={styles.h1}>LOGIN</h1>
          <div className={styles.box}>
            <input  className={styles.username} type="text" name="username" placeholder="Username" />
            <i className='bx bxs-user'></i>
          </div>
          <div className={styles.box}>
            <input type="password" name="password" placeholder="Password" />
            <i className='bx bxs-lock'></i>
          </div>
          <div className={styles.save}>
            <label>
              <input type="checkbox" />Remember Me
            </label>
            <a href="#">Forgot password ?</a>
          </div>
          <button type="submit" className={styles.button}>Login</button>
          <div className={styles.register}>
            <p>Don't have an account?
              <Link to="/register">SIGN UP</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
