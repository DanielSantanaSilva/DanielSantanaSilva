import Registration from '@/components/Registration';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Speakers from '../components/Speakers';
import Section from '@/components/Section';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Section />
      <Registration />
      <Speakers />
    </div>
  );
}


