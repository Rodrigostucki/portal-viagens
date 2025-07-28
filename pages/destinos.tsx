import Layout from '../components/Layout';
import { destinos } from '../data/destinos';
import CardDestino from '../components/CardDestino';

export default function Destinos() {
  return (
    <Layout>
      <h1>Destinos Turísticos</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {destinos.map((destino) => (
          <CardDestino key={destino.id} destino={destino} />
        ))}
      </div>
    </Layout>
  );
}