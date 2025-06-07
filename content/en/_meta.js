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
    title: "Grandmaster Kobi",
    href: "/federacao/instrutores/grao-mestre-kobi"
  },
  "krav-maga": {
    title: "Krav Maga",
    type: "page",
  },
  federacao: {
    title: "Federation",
    type: "page",
  },
  academias: {
    title: "Schools",
    type: "page",
    theme: {
      sidebar: true,
    },
  },
  blog: {
    title: "Blog",
    type: "page",
    theme: {
      sidebar: false,
      typesetting: "article"
    }
  },
  contato: {
    title: "Contact",
    type: "page",
    theme: {
      sidebar: false,
      layout: "full",
    },
  },
  "area-do-aluno": {
    title: "Student Area",
    type: "page",
    href: "https://intranetfsakm.com.br/",
  },
}
