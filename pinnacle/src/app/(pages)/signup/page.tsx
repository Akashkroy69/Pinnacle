"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './Signup.module.css';
import { useRouter } from 'next/navigation';

const apiurl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const SignupPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password, confirmpassword } = formData;

    if (password !== confirmpassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch(`${apiurl}/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });

      if (response.ok) {
        alert('Account created successfully');
        router.push('/login');
      } else {
        const data = await response.json();
        alert(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };


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

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          placeholder="First and last name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="At least 6 characters"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <p className={styles.passwordInfo}>Passwords must be at least 6 characters.</p>

        <label htmlFor="confirmpassword">Password again</label>
        <input
          type="password"
          id="confirmpassword"
          placeholder="Re-enter password"
          value={formData.confirmpassword}
          onChange={handleChange}
          required
        />

        <button type="submit" className={styles.createAccountButton}>
          Create your Pinnacle account
        </button>
      </form>

      <p className={styles.agreement}>
        By creating an account, you agree to Pinnacle’s
        <a href="/terms"> Terms of Service</a> and
        <a href="/privacy"> Privacy Policy</a>.
      </p>

      <p className={styles.signin}>
        Already have an account? <a href="/login">Sign in</a>
      </p>
    </div>
  );
};

export default SignupPage;
