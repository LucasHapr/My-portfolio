import {
  go,
  mongoDB,
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  postgresql,
  docker,
  python,
  bootstrap,
  php,
  sass,
  nextjs,
  ib,
  lilac,
  secret,
  goApi,
  roboCorretores,
  notes,
  GenerateImage,
  weather,
  api,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre Mim",
  },
  {
    id: "projects",
    title: "Projetos",
  },
  {
    id: "work",
    title: "Experiencia",
  },
];

const services = [
  {
    title: "Desenvolvedor Frontend",
    icon: frontend,
  },
  {
    title: "Desenvolvedor Backend",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Prototipagem de Software",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Golang",
    icon: go,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MongoDB",
    icon: mongoDB,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Php",
    icon: php,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
];

const experiences = [
  {
    title: "Estágio Suporte de TI",
    company_name: "IB System",
    icon: ib,
    iconBg: "#333333",
    date: "Aug 2023 - Out 2023",
  },
  {
    title: "Desenvolvedor FullStack Junior",
    company_name: "IB System",
    icon: ib,
    iconBg: "#333333",
    date: "Nov 2023 - May 2025",
  },
  {
    title: "Desenvolvedor FullStack Pleno",
    company_name: "IB System",
    icon: ib,
    iconBg: "#333333",
    date: "May 2025 - Atual",
  },
  // {
  //   title: 'Junior Software Engineer',
  //   company_name: 'Kelhel',
  //   icon: kelhel,
  //   iconBg: '#333333',
  //   date: 'May 2022 - Oct 2022',
  // },
  // {
  //   title: 'FullStack Developer',
  //   company_name: 'Diversity Cyber Council',
  //   icon: dcc,
  //   iconBg: '#333333',
  //   date: 'Sep 2022 - Present',
  // },
];

const projects = [
  // {
  //   id: "project-1",
  //   name: "Lilac Pratas",
  //   description:
  //     "Lilac Pratas é um projeto desenvolvido em PHP que integra controle de produtos e gerenciamento de estoque diretamente no site.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: lilac,
  //   // repo: "",
  //   demo: "https://lilacpratas.com.br/",
  // },
  {
    id: "project-2",
    name: "Transcrição de imagens",
    description:
      "Este projeto utiliza inteligência artificial para transcrever automaticamente textos presentes em imagens. Com o uso da biblioteca google.generativeai.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "IA",
        color: "green-text-gradient",
      },
    ],
    image: GenerateImage,
    repo: "https://github.com/LucasHapr/Transcricao_de_imagens",
    // demo: "https://palavra-secreta-gules.vercel.app/",
  },
  {
    id: "project-3",
    name: "Robô busca corretores",
    description:
      "Automatização em python utilizada para buscar os corretores listados no creci SP e salvá-los no banco",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: roboCorretores,
    repo: "https://github.com/LucasHapr/Robo_busca_corretores",
    // demo: "https://inspiring-medovik-37d3b3.netlify.app/",
  },
  {
    id: "project-6",
    name: "Go API Products",
    description:
      "API RESTful em Go (Gin) com Clean Architecture e PostgreSQL. CRUD de produtos, containers com Docker e endpoints prontos para produção.",
    tags: [
      { name: "Go", color: "green-text-gradient" },
      { name: "Gin", color: "blue-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
      { name: "Docker", color: "blue-text-gradient" },
      { name: "Clean Architecture", color: "pink-text-gradient" }
    ],
    image: goApi,
    repo: "https://github.com/LucasHapr/Go_api_products",
    // demo: "",
  },
  {
    id: "project-4",
    name: "React Weather Web",
    description:
      "Aplicação Web de clima desenvolvida com Vite, ReactJS e TailwindCSS, consumindo dados da WeatherAPI em tempo real.",
    tags: [
      {
        name: "vite",
        color: "purple-text-gradient",
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "weatherapi",
        color: "green-text-gradient",
      },
    ],
    image: weather,
    repo: "https://github.com/LucasHapr/ReactWeather",
    demo: "https://react-weather-flame.vercel.app/",
  },
  {
    id: "project-5",
    name: "API JWT Produtos",
    description: `API RESTful com autenticação JWT, CRUD de produtos com paginação/ordenação/busca full‑text, documentação via Swagger e orquestração com Docker Compose. Projeto pronto para deploy (Render).`,
    tags: [
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express", color: "blue-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Docker", color: "blue-text-gradient" },
      { name: "JWT", color: "pink-text-gradient" },
      { name: "Swagger", color: "pink-text-gradient" },
    ],
    image: api,
    repo: "https://github.com/LucasHapr/jwt-crud-api",
    demo: "https://jwt-crud-api.onrender.com/docs",
  },

  //   {
  //   id: "project-5",
  //   name: "Projeto Notas",
  //   description: `Bloco de notas intuitivo desenvolvido em React com captação de texto por voz`,
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: notes,
  //   repo: "https://github.com/LucasHapr/Nlw-project-notes",
  //   demo: "https://nlw-project-notes-two.vercel.app/",
  // },
  // {
  //   id: "project-6",
  //   name: "Palavra Secreta",
  //   description:
  //     "O projeto Palavra Secreta é uma aplicação interativa desenvolvida em React, inspirada no clássico jogo de adivinhação popularizado pelo programa de Silvio Santos.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: secret,
  //   repo: "https://github.com/LucasHapr/Palavra-Secreta",
  //   demo: "https://palavra-secreta-gules.vercel.app/",
  // },
];

export { services, technologies, experiences, projects };
