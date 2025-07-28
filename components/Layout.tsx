import Link from 'next/link';
import styles from '../styles/Layout.module.css';
import { ReactNode } from 'react';

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div>
      <header className={styles.header}>
        <nav>
          <Link href="/">Início</Link>
          <Link href="/destinos">Destinos</Link>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>© 2025 Portal de Viagens</footer>
    </div>
  );
}