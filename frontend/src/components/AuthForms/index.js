import React from 'react';
import IonIcon from 'react-ionicons';
import styles from './style.scss';

export const LoginForm = (props) => (
  <div className={styles.formComponent}>
    <form className={styles.form}>
      <input
        type='text'
        placeholder='Username'
        className={styles.textInput} />
      <input type='password'
        placeholder='Password'
        className={styles.textInput} />
      <input type='submit'
        placeholder='Log in'
        className={styles.button} />
    </form>
    <span className={styles.divider}>or</span>
    <span className={styles.facebookLink}>
      <IonIcon icon='logo-facebook' fontsize='20px' color='#385185' />
      Login with Facebook
    </span>
    <span className={styles.forgotLink}>
      Forgot Password?
    </span>
  </div>
)

export const SignupForm = (props) => (
  <div className={styles.formComponent}>
    <p>
      Sign up to see photos and videos from your friends.</p>
    <button className={styles.button}>
    <IonIcon icon='logo-facebook' fontsize='20px' color='white' />
    Log in with Facebook
    </button>
    <span className={styles.divider}>or</span>
    <form className={styles.form}>
      <input type='text'
        placeholder='Email'
        className={styles.textInput} />
      <input type='text'
        placeholder='Full Name'
        className={styles.textInput} />
      <input type='text'
        placeholder='User Name'
        className={styles.textInput} />
      <input type='password'
        placeholder='Password'
        className={styles.textInput} />
      <input type='submit'
        placeholder='Sign up'
        className={styles.button} />
    </form>
    <p>By signing up, you agree to our <span>Terms & Privacy Policy.</span></p>
  </div>
)