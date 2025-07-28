export interface Destino {
  id: string;
  nome: string;
  imagem: string;
  descricao: string;
}

export const destinos: Destino[] = [
  {
    id: 'paris',
    nome: 'Paris',
    imagem: '/paris.jpg',
    descricao: 'A cidade luz, famosa por sua arquitetura e cultura.',
  },
  {
    id: 'rio',
    nome: 'Rio de Janeiro',
    imagem: '/rio.jpg',
    descricao: 'Cidade maravilhosa, com praias icônicas e o Cristo Redentor.',
  },
  {
    id: 'toquio',
    nome: 'Tóquio',
    imagem: '/toquio.jpg',
    descricao: 'Capital do Japão, mistura tradição e modernidade.',
  },
  {
    id: 'ny',
    nome: 'Nova York',
    imagem: '/ny.jpg',
    descricao: 'A cidade que nunca dorme, cheia de energia e diversidade.',
  },
];