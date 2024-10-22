import React from 'react';
import styles from '../styles/Home.module.css';

const speakersData = [
  {
    name: 'Palestrante 1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: '/public/palestrante1.svg',
  },
  {
    name: 'Palestrante 2',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: '/public/palestrante2.svg',
  },
  {
    name: 'Palestrante 3',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: '/path/to/speaker3.jpg',
  },
  {
    name: 'Palestrante 4',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: '/public/palestrante1.svg',
  },
];

const Speakers = () => {
  return (
    <section className={styles.palestrantes}>
      <div className={styles.container}>
        <h2>PALESTRANTES</h2>
        {speakersData.map((speaker, index) => (
          <div key={index} className={styles.palestrante}>
            <img src={speaker.image} alt={speaker.name} />
            <h3>{speaker.name}</h3>
            <p>{speaker.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Speakers;