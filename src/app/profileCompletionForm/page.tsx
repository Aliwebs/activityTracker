"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './page.module.css'; // Make sure to create this CSS module

// Define the type for the profile state
type ProfileState = {
  height: string;
  weight: string;
  age: string;
  gender: string;
};

function ProfileCompletionForm() {
  const [profile, setProfile] = useState<ProfileState>({
    height: '',
    weight: '',
    age: '',
    gender: '',
  });

  // Correct type for handleChange to handle change events from input and select
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Correct type for handleSubmit to handle form submission events
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(profile);
    // Here you would typically send the profile data to your server
    // Redirect to the main activity dashboard
    window.location.href = '/dashboard'; // This is a placeholder redirect
  };

  return (
    <div className={styles.profileFormContainer}>
      <h2>Complete Your Profile</h2>
      <form onSubmit={handleSubmit} className={styles.profileForm}>
        <input
          name="height"
          type="number"
          placeholder="Height (in cm)"
          value={profile.height}
          onChange={handleChange}
          className={styles.inputField}
        />
        <input
          name="weight"
          type="number"
          placeholder="Weight (in kg)"
          value={profile.weight}
          onChange={handleChange}
          className={styles.inputField}
        />
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={profile.age}
          onChange={handleChange}
          className={styles.inputField}
        />
        <select
          name="gender"
          value={profile.gender}
          onChange={handleChange}
          className={styles.selectField}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}

export default ProfileCompletionForm;
