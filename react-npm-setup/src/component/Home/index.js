import React from 'react'
import Header from '../Layout/Header/index.js';
import styles from './home.module.scss';

export default function Home() {
  return (
      <>
           <Header/>
           <div className={styles.hello}>index</div>
      </>
     
  )
}
