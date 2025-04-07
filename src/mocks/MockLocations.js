import roupas from '../../assets/camiseta.png';
import servico from '../../assets/servicos-voluntarios.png';
import higiene from '../../assets/produtos-de-higiene-pessoal.png';
import alimento from '../../assets/alimentos.png';

const mockLocations = [
  {
    id: 1,
    latitude: -23.5605,
    longitude: -46.6535,
    name: "Comunidade Nova Esperança",
    necessidades: [
      { id: 1, name: "Alimentos" },
      { id: 2, name: "Água potável" },
      { id: 3, name: "Produtos de higiene" },
    ]
  },
  {
    id: 2,
    latitude: -23.5618,
    longitude: -46.6548,
    name: "Vila da Paz",
    necessidades: [
      { id: 1, name: "Roupas" },
      { id: 2, name: "Calçados" },
      { id: 3, name: "Cobertores" },
    ]
  },
  {
    id: 3,
    latitude: -23.5627,
    longitude: -46.6519,
    name: "Assentamento Esperança Viva",
    necessidades: [
      { id: 1, name: "Materiais escolares" },
      { id: 2, name: "Alimentos" },
      { id: 3, name: "Fraldas" },
    ]
  },
  {
    id: 4,
    latitude: -23.5600,
    longitude: -46.6513,
    name: "Jardim das Promessas",
    necessidades: [
      { id: 1, name: "Medicamentos" },
      { id: 2, name: "Voluntários de saúde" },
      { id: 3, name: "Produtos de higiene" },
    ]
  },
  {
    id: 5,
    latitude: -23.5620,
    longitude: -46.6543,
    name: "Comunidade Sol Nascente",
    necessidades: [
      { id: 1, name: "Alimentos" },
      { id: 2, name: "Brinquedos" },
      { id: 3, name: "Roupas infantis" },
    ]
  },
  {
    id: 6,
    latitude: -23.5633,
    longitude: -46.6532,
    name: "Vila dos Sonhos",
    necessidades: [
      { id: 1, name: "Água potável" },
      { id: 2, name: "Lona e barracas" },
      { id: 3, name: "Voluntários" },
    ]
  },
  {
    id: 7,
    latitude: -23.5612,
    longitude: -46.6509,
    name: "Favela São Jorge",
    necessidades: [
      { id: 1, name: "Material de construção" },
      { id: 2, name: "Serviços voluntários" },
      { id: 3, name: "Alimentos" },
    ]
  },
  {
    id: 8,
    latitude: -23.5638,
    longitude: -46.6551,
    name: "Vila Boa Vista",
    necessidades: [
      { id: 1, name: "Produtos de limpeza" },
      { id: 2, name: "Água potável" },
      { id: 3, name: "Cobertores" },
    ]
  },
  {
    id: 9,
    latitude: -23.5607,
    longitude: -46.6541,
    name: "Comunidade União",
    necessidades: [
      { id: 1, name: "Roupas" },
      { id: 2, name: "Remédios" },
      { id: 3, name: "Fraldas" },
    ]
  },
  {
    id: 10,
    latitude: -23.5629,
    longitude: -46.6520,
    name: "Morada da Fé",
    necessidades: [
      { id: 1, name: "Alimentos" },
      { id: 2, name: "Brinquedos" },
      { id: 3, name: "Serviços voluntários" },
    ]
  },
];



export default mockLocations;