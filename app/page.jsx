import Registration from '@/components/Registration';
import Hero from '../components/Hero';
import Speakers from '../components/Speakers';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <Registration />
      <Speakers />
    </div>
  );
}
