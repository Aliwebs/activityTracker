"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './page.module.css';

type ProfileData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const Registration: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProfileData({ ...profileData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Basic validation for example purposes
    if (!profileData.email || !profileData.password || !profileData.confirmPassword) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
    if (profileData.password !== profileData.confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }
    
    // Here you would send the data to the server
    console.log('Submitting data', profileData);

    // Clear form
    setProfileData({
      email: '',
      password: '',
      confirmPassword: '',
    });
    
    // Reset error message
    setErrorMessage('');

    // Redirect or inform the user of successful registration
    window.location.href = '/profileCompletionForm'; 
  };

  return (
    <div className={styles.profileFormContainer}>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit} className={styles.profileForm}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={profileData.email}
          onChange={handleChange}
          className={styles.inputField}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={profileData.password}
          onChange={handleChange}
          className={styles.inputField}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={profileData.confirmPassword}
          onChange={handleChange}
          className={styles.inputField}
        />
        {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
        <button type="submit" className={styles.submitButton}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
