import React from 'react'
import Image from 'next/image';
import styles from './Signup.module.css';

export const page = () => {
  return (
    <div className={styles.createAccountContainer}>
      <Image
        src="/pinnacle-logoo.png"
        alt="Pinnacle Logo"
        width={150}
        height={50}
        className={styles.logo}
      />
      <h1>Create your Pinnacle account</h1>
      <form>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" placeholder="First and last name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder='Enter your Email' required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="At least 6 characters" required />
        <p className={styles.passwordInfo}>Passwords must be at least 6 characters.</p>

        <label htmlFor="confirmpassword">Password again</label>
        <input type="password" id="confirmpassword" placeholder='Re-enter password' required />

        <button type="submit" className={styles.createAccountButton}>
          Create your Pinnacle account
        </button>
      </form>

      <p className={styles.agreement}>
        By clicking "Create your Pinnacle account", you agree to the 
        <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088"> Conditions of Use & Sale</a>,
        the <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">Pinnacle Store Terms of Use</a> and
        Pinnacle Publication's <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">Privacy Notice</a>.
      </p>

      <p className={styles.signin}>
        Already have a Pinnacle account? <a href="/login">Sign in</a>
      </p>
    </div>
  )
}

export default page;
