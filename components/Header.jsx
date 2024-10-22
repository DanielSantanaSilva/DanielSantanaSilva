import React from 'react';
import Link from 'next/link';
import Logo from '../public/Logo.svg';
import styles from '../styles/Home.module.css';
const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <Link href="/">
                        <img src={Logo.src} alt="Logo" className={styles.logoImg} />
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link href="/inscrever-se">
                                <button className="navButton">Inscreva-se</button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/programacao">
                                <button className="navButton">Programação</button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/faq">
                                <button className="navButton">FAQ</button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
