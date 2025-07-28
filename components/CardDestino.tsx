import Link from 'next/link';
import styles from '../styles/CardDestino.module.css';
import { Destino } from '../data/destinos';

type Props = { destino: Destino };

export default function CardDestino({ destino }: Props) {
  return (
    <div className={styles.card}>
      <img src={destino.imagem} alt={destino.nome} />
      <h2>{destino.nome}</h2>
      <Link href={`/destinos/${destino.id}`}>Ver mais</Link>
    </div>
  );
}