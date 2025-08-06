"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './Login.module.css';
import { useRouter } from 'next/navigation';

const apiurl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const LoginPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const response = await fetch(`${apiurl}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const data = await response.json();
        alert('Login successful');
        console.log('Token:', data.token); // Optional: Save to localStorage
        router.push('/pinnacle-library');    // Or any page after login
      } else {
        const data = await response.json();
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error logging in');
    }
  };

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

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email or mobile phone number</label>
        <input
          type="text"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email or mobile number"
          required
        />

        <div style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <label htmlFor="password">Password</label>
          <a href="#" className={styles.fp}>Forgot Password?</a>
        </div>

        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />

        <button type="submit" className={styles.signInButton}>
          Sign in
        </button>
      </form>

      <p className={styles.agreement}>
        By continuing, you agree to Pinnacle's
        <a href="/terms"> Conditions of Use</a> and
        <a href="/privacy"> Privacy Notice</a>.
      </p>

      <p className={styles.createAccount}>
        New to Pinnacle? <a href="/signup">Create your Pinnacle account</a>
      </p>
    </div>
  );
};

export default LoginPage;
