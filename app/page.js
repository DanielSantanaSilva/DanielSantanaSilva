import React from 'react';
import './App.css';
import logoEtapa from '../assets/logotipo-sistema-etapa-rgb-color-3-1.svg';
import planetBackground from '../assets/group-3.svg';
import speaker1 from '../assets/image-4.svg';
import speaker2 from '../assets/image-3.svg';
import speaker3 from '../assets/image-2.svg';
import speaker4 from '../assets/image.svg';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <img src={logoEtapa} alt="Sistema Etapa Logo" className="Logo" />
        <nav className="Nav">
          <button className="NavButton">Inscreva-se</button>
          <button className="NavButton">Programação</button>
          <button className="NavButton">FAQ</button>
        </nav>
      </header>

      <section className="Banner" style={{ backgroundImage: `url(${planetBackground})` }}>
        <h1>EXPLORE</h1>
        <h2>UM UNIVERSO DE CONHECIMENTO</h2>
        <p>Evento exclusivo para mantenedores parceiros</p>
        <button className="BannerButton">INSCREVA-SE</button>
      </section>

      <section className="Event">
        <h2>SOBRE O EVENTO</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged...
        </p>
      </section>

      <section className="Register">
        <h2>INSCRIÇÃO</h2>
        <p>
          Pedimos que todos os dados sejam preenchidos corretamente para que não ocasionar nenhum problema durante sua
          estadia.
        </p>
        {/* Form inputs can be added here with additional details */}
      </section>

      <section className="Speakers">
        <h2>PALESTRANTES</h2>
        <div className="Speaker">
          <img src={speaker1} alt="Palestrante 1" />
          <h3>Palestrante 1</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        <div className="Speaker">
          <img src={speaker2} alt="Palestrante 2" />
          <h3>Palestrante 2</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        <div className="Speaker">
          <img src={speaker3} alt="Palestrante 3" />
          <h3>Palestrante 3</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        <div className="Speaker">
          <img src={speaker4} alt="Palestrante 4" />
          <h3>Palestrante 4</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
