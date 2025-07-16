import React from 'react'
import Image from 'next/image';
import styles from './Login.module.css';

export const page = () => {
  return (
    <div className={styles.signInContainer}>
      <Image
        src="/pinnacle-logoo.png"
        alt="Pinnacle Logo"
        width={150}
        height={50}
        className={styles.logo}
      />
      <h1>Sign in to Pinnacle</h1>
      <form>
        <label htmlFor="email">Email or mobile phone number</label>
        <input type="text" id="email" placeholder='enter your email or password' required />

        <div style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <label htmlFor="password">Password</label>
          <a href="#" className={styles.fp}>Forgot Password?</a>
        </div>

        <input type="password" id="password" required placeholder='enter your password' />

        <button type="submit" className={styles.signInButton}>
          Sign in
        </button>
      </form>

      <p className={styles.agreement}>
        By continuing, you agree to Pinnacle's
        <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088"> Conditions of Use</a> and
        <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496"> Privacy Notice</a>.
      </p>

      <p className={styles.createAccount}>
        New to Pinnacle? <a href="/signup">Create your Pinnacle account</a>
      </p>
    </div>
  )
}

export default page;
