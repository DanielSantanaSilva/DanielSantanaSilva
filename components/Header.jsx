import React from 'react';
import Link from 'next/link';
import Logo from '../public/Logo.svg';
import styles from '../styles/Home.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img src={Logo.src} alt="Logo" className={styles.logoImg} />
                    </Link>
                </div>
                <div className={styles.buttonContainer}>
                    <Link href="/inscrever-se">
                        <button className={styles.Button}>Inscreva-se</button>
                    </Link>
                    <Link href="/programacao">
                        <button className={styles.Button}>Programação</button>
                    </Link>
                    <Link href="/faq">
                        <button className={styles.Button}>FAQ</button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
