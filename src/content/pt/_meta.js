module.exports={
  index: {
    type: "page",
    display: "hidden",
    theme: {
      sidebar: false, // Hide navbar on this page
      layout: "full",
      toc: false, // Hide table of contents on this page
    },
  },
  mestre_kobi: {
    type: "page",
    title: 'Grão Mestre Kobi',
    href: '/federacao/instrutores/grao-mestre-kobi'
  },
  // "grao-mestre-kobi": {
  //   title: "Grão Mestre Kobi",
  //   type: "page",
  //   theme: {
  //     sidebar: false, // Hide navbar on this page
  //   },
  // },
  "krav-maga": {
    title: "Krav Maga",
    type: "page",
  },
  federacao: {
    title: "Federação",
    type: "page",
  },
  academias: {
    title: "Academias",
    type: "page",
    theme: {
      sidebar: true,
    },
  },
  blog: {
    title: "Blog",
    type: "page",
  },
  contato: {
    title: "Contato",
    type: "page",
    theme: {
      sidebar: false, // Hide navbar on this page
      layout: "full",
    },
  },
  "area-do-aluno": {
    title: "Área do Aluno",
    type: "page",
    href: "https://intranetfsakm.com.br/",
  },
}
