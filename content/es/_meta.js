module.exports={
  index: {
    type: "page",
    display: "hidden",
    theme: {
      sidebar: false, // Ocultar la barra lateral en esta página
      layout: "full",
      toc: false, // Ocultar la tabla de contenidos en esta página
    },
  },
  mestre_kobi: {
    type: "page",
    title: "Gran Maestro Kobi",
    href: "/federacao/instrutores/grao-mestre-kobi"
  },
  "krav-maga": {
    title: "Krav Maga",
    type: "page",
  },
  federacao: {
    title: "Federación",
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
    theme: {
      sidebar: false,
      typesetting: "article"
    }
  },
  contato: {
    title: "Contacto",
    type: "page",
    theme: {
      sidebar: false,
      layout: "full",
    },
  },
  "area-do-aluno": {
    title: "Área del Alumno",
    type: "page",
    href: "https://intranetfsakm.com.br/",
  },
}
