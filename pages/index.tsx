import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useAuth from '../hooks/useAuth';
export default function Home() {

  const { user, signin } = useAuth();
  
  console.log('user - ', user);
  return (
    <div className={styles.container}>
      <button onClick={signin}>Logar</button>
    </div>
  )
}
