import React from 'react';
import styles from '../styles/Home.module.css';

const speakersData = [
  {
    name: 'Palestrante 1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: '/palestrante1.svg',
  },
  {
    name: 'Palestrante 2',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: '/palestrante2.svg',
  },
  {
    name: 'Palestrante 3',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: '/palestrante3.svg',
  },
  {
    name: 'Palestrante 4',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: '/palestrante4.svg',
  },
];

const Speakers = () => {
  return (
    <section className={styles.palestrantes}>
      <h2>PALESTRANTES</h2>
      <div className={styles.speakersContainer}>
        {speakersData.map((speaker, index) => (
          <div key={index} className={styles.palestrante}>
            <img src={speaker.image} alt={speaker.name} />
            <div>
              <h3>{speaker.name}</h3>
              <p>{speaker.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Speakers;
