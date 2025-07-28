import { useRouter } from 'next/router';
import { destinos } from '../../data/destinos';
import Layout from '../../components/Layout';
import Link from 'next/link'; // ✅ IMPORTANTE: adicione este import

export default function DetalhesDestino() {
  const router = useRouter();
  const { id } = router.query;
  const destino = destinos.find((d) => d.id === id);

  if (!destino) return <Layout><p>Destino não encontrado.</p></Layout>;

  return (
    <Layout>
      <h1>{destino.nome}</h1>
      <img src={destino.imagem} alt={destino.nome} style={{ maxWidth: '600px' }} />
      <p>{destino.descricao}</p>
      <Link
        href="/destinos"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          color: '#0070f3',
          textDecoration: 'none',
        }}
      >
        ← Voltar para lista de destinos
      </Link>
    </Layout>
  );
}
