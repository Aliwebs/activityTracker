import React from 'react';
import styles from './page.module.css';

export default function Login() {
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" name="email" required className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input type="password" id="password" name="password" required className={styles.input} />
        </div>
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
}
