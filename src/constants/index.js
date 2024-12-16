import {
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
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  python,
  bootstrap,
  php,
  sass,
  nextjs,
  ib,
  lilac,
  secret,
  roboCorretores,
  notes,
  GenerateImage,
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
    name: "Python",
    icon: python,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Php",
    icon: php,
  },
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
    title: "Desenvolvedor Front-End",
    company_name: "IB System",
    icon: ib,
    iconBg: "#333333",
    date: "Nov 2023 - Atual",
  },
  // {
  //   title: 'Junior Software Engineer',
  //   company_name: 'Kelhel',
  //   icon: kelhel,
  //   iconBg: '#333333',
  //   date: 'May 2022 - Oct 2022',
  // },
  // {
  //   title: 'Full Stack Developer',
  //   company_name: 'Diversity Cyber Council',
  //   icon: dcc,
  //   iconBg: '#333333',
  //   date: 'Sep 2022 - Present',
  // },
];

const projects = [
  {
    id: "project-1",
    name: "Lilac Pratas",
    description:
      "Lilac Pratas é um projeto desenvolvido em PHP que integra controle de produtos e gerenciamento de estoque diretamente no site.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: lilac,
    // repo: "",
    demo: "https://lilacpratas.com.br/",
  },
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
    description: "Automatização em python utilizada para buscar os corretores listados no creci SP e salvá-los no banco",
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
    id: "project-4",
    name: "Projeto Notas",
    description: `Bloco de notas intuitivo desenvolvido em React com captação de texto por voz`,
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
    image: notes,
    repo: "https://github.com/LucasHapr/Nlw-project-notes",
    demo: "https://nlw-project-notes-two.vercel.app/",
  },
  {
    id: "project-5",
    name: "Palavra Secreta",
    description:
      "O projeto Palavra Secreta é uma aplicação interativa desenvolvida em React, inspirada no clássico jogo de adivinhação popularizado pelo programa de Silvio Santos.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: secret,
    repo: "https://github.com/LucasHapr/Palavra-Secreta",
    demo: "https://palavra-secreta-gules.vercel.app/",
  },
  // {
    //   id: "project-5",
  //   name: "Nyeusi Fest Site",
  //   description:
  //     "This is a demo concert website for a music festival called Nyeusi.",
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
  //   image: nyeusi,
  //   repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
  //   demo: "https://shaqdeff.github.io/Nyeusi-Fest-Site/",
  // },
];

export { services, technologies, experiences, projects };
