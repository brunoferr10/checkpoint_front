import { NewsItem } from '../types';

const placeholderImage = "data:image/svg+xml;utf8," + encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'>
    <rect width='100%' height='100%' fill='#e2e8f0'/>
    <text x='50%' y='50%' font-size='28' text-anchor='middle' fill='#94a3b8' dy='.3em'>Imagem de placeholder</text>
  </svg>`
);

export const news: NewsItem[] = [
  {
    id: "1",
    title: "Governo anuncia novo programa de educação",
    date: "2025-08-10",
    content: "Um novo programa voltado à modernização das escolas públicas foi anunciado com foco em tecnologia, formação de professores e infraestrutura.",
    image: placeholderImage,
    categories: ["Educação","Política"],
    comments: [{ id: "c1", name: "Ana", text: "Excelente iniciativa!" }]
  },
  {
    id: "2",
    title: "Time local vence campeonato estadual",
    date: "2025-07-22",
    content: "Em uma final emocionante, o time da cidade conquistou o título após uma disputa por pênaltis que entrou para a história local.",
    image: placeholderImage,
    categories: ["Esporte"],
    comments: [{ id: "c2", name: "Pedro", text: "Momento inesquecível!" }]
  },
  {
    id: "3",
    title: "Feira de tecnologia atrai startups",
    date: "2025-09-01",
    content: "A feira reuniu dezenas de startups e investidores interessados em soluções sustentáveis e fintechs com propostas inovadoras.",
    image: placeholderImage,
    categories: ["Tecnologia","Economia"],
    comments: []
  },
  {
    id: "4",
    title: "Arte urbana transforma centro histórico",
    date: "2025-06-12",
    content: "Intervenções artísticas revitalizaram fachadas e geraram um roteiro cultural de grafite pela região.",
    image: placeholderImage,
    categories: ["Cultura"],
    comments: []
  },
  {
    id: "5",
    title: "Pesquisa aponta mudanças climáticas locais",
    date: "2025-05-30",
    content: "Estudo regional mostra alterações no regime de chuvas e impacto na agricultura familiar, exigindo políticas adaptativas.",
    image: placeholderImage,
    categories: ["Meio Ambiente","Ciência"],
    comments: []
  },
  {
    id: "6",
    title: "Mercado imobiliário dá sinais de estabilização",
    date: "2025-04-18",
    content: "Depois de alta volatilidade, indicadores sugerem desaceleração e ajuste de preços nas grandes cidades.",
    image: placeholderImage,
    categories: ["Economia"],
    comments: []
  },
  {
    id: "7",
    title: "Culinária local ganha destaque em festival",
    date: "2025-03-05",
    content: "Chefs e produtores locais mostraram receitas tradicionais e ingredientes regionais ao público.",
    image: placeholderImage,
    categories: ["Cultura","Gastronomia"],
    comments: []
  },
  {
    id: "8",
    title: "Startup desenvolve app de saúde grátis",
    date: "2025-02-20",
    content: "Aplicativo promete agendamento simplificado e orientação básica de triagem para comunidades de baixa renda.",
    image: placeholderImage,
    categories: ["Tecnologia","Saúde"],
    comments: []
  },
  {
    id: "9",
    title: "Mobilidade urbana: novo corredor de ônibus",
    date: "2025-01-15",
    content: "Projeto prevê corredor exclusivo para reduzir tempo de deslocamento e integra aplicativos de bilhetagem.",
    image: placeholderImage,
    categories: ["Transporte"],
    comments: []
  },
  {
    id: "10",
    title: "Biblioteca comunitária amplia acervo",
    date: "2024-12-10",
    content: "Ações de doação e parceria com universidades permitiram a ampliação do acervo e programas de leitura.",
    image: placeholderImage,
    categories: ["Educação","Cultura"],
    comments: []
  },
  {
    id: "11",
    title: "Economia criativa gera empregos locais",
    date: "2025-09-12",
    content: "Eventos e incubadoras ajudaram novos negócios criativos a nascerem e absorverem mão de obra qualificada.",
    image: placeholderImage,
    categories: ["Economia","Cultura"],
    comments: []
  }
];

export default {
  getAll: () => Promise.resolve(news.slice()), // pretend API
  getById: (id: string) => Promise.resolve(news.find(n => n.id === id) || null)
};
