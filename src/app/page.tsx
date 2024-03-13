import React from 'react';
import Image from 'next/image'; // Importing the Image component
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.background}>
      {/* Using the Image component correctly */}
      <Image src="/logo_text.webp" alt="Logo" width={256} height={256}/>
      <h1 className={styles.title}>Have you been here before?</h1>
      <div className={styles.buttonContainer}>
        <a href="/login" className={styles.buttonLink}><button className={styles.button}>Yes</button></a>
        <a href="/register" className={styles.buttonLink}><button className={styles.button}>No</button></a>
      </div>
    </div>
  );
}
