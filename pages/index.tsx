import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className={styles.home}>
        <h1>Bem-vindo ao Portal de Viagens</h1>
        <p>Descubra os destinos mais incríveis do mundo.</p>
        <Link href="/destinos" className={styles.botao}>Ver Destinos</Link>
      </div>
    </Layout>
  );
}