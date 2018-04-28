import React from 'react';
import styles from './style.scss'
import { LoginForm, SignupForm } from 'components/AuthForms'

console.log(styles)
const Auth = (props, context) => (
  <main className={styles.auth}>
    <div className={styles.column}>
      <img
        src={require('images/phone.png')}
        alt='The app sophiedophie created is super cool' />
    </div>
    <div className={styles.column}>
      <div className={`${styles.whiteBox} ${styles.formBox}`}>
      <img
        src={require('images/instagram.png')}
        alt='logo'
        style={{width: '60%'}}/>
        {props.action === "login" && (<LoginForm />)}
        {props.action === 'signup' && (<SignupForm />)}
      </div>
      <div className={styles.whiteBox}>
      {props.action === "login" && (
        <p>Don't have an account?{" "}
        <span onClick={props.changeAction} className={styles.changeLink}>
          Sign up
        </span>
        </p>
      )}
      {props.action === 'signup' && (
        <p>Have an account?{" "}
        <span onClick={props.changeAction} className={styles.changeLink}>
          Log in
        </span>
        </p>
      )}
      </div>
      <div className={styles.appBox}>
        <span> Get the app </span>
        <div className={styles.appstores}>
          <img 
            src={require('images/ios.png')}
            alt='Download the app from Apple store' />
          <img
            src={require('images/android.png')}
            alt='Download the app from Android store' />
        </div>
      </div>
    </div>
  </main>
)

export default Auth;