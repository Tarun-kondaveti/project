import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RegisterPage.module.css';

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.register}>
        <form onSubmit={handleSubmit}>
          <h1 className={styles.h1}>SIGN UP</h1>
          <div className={styles.box}>
            <input className={styles.username} type="text" placeholder="Username" />
            <i className='bx bxs-user'></i>
          </div> 
          <div className={styles.box}>
            <input type="email" placeholder="Email" />
            <i className='bx bxs-envelope'></i>
          </div>
          <div className={styles.box}>
            <input type="password" placeholder="Password" />
            <i className='bx bxs-lock'></i>
          </div>
          <div className={styles.box}>
            <input type="password" placeholder="Confirm Password" />
            <i className='bx bxs-lock'></i>
          </div>
          <button type="submit" className={styles.button}>SIGN UP</button>
          <div className={styles.login}>
            <p>Already have an account?
              <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
