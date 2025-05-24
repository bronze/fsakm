const {title}=require("process");

module.exports={
  index: {
    type: "page",
    display: "hidden"
  },
  academias: {
    type: "page",
    title: "Academias",
    index: "",
    _4: {
      type: 'separator',
      title: 'Top-Level Files'
    },
    items: {
      _1: {
        type: "separator",
        title: "Países"
      },
      argentina: {
        index: "Argentina",
        title: "Argentina",
        items: {
          Belgrano: ""
        }
      },
      _4: {
        type: 'separator',
        title: 'Top-Level Files'
      },
      brasil: {
        title: "Brasil",
        items: {
          index: ""
        }
      },
      canada: {
        title: "Canada",
        theme: {
          collapsed: "false"
        },
        items: {
          index: ""
        }
      },
      mexico: {
        title: "México",
        theme: {
          collapsed: "false"
        },
        items: {
          index: ""
        }
      },
      portugal: {
        title: "Portugal",
        theme: {
          collapsed: "false"
        },
        items: {
          index: ""
        }
      },
      usa: {
        title: "USA",
        theme: {
          collapsed: "false"
        },
        items: {
          index: ""
        }
      }
    }
  },
  "krav-maga": {
    index: "",
    title: "Krav Maga",
    type: "page",
    items: {
      criador: "",
      historia: "",
      israel: "",
      'linha-do-tempo': ""
    }
  },
  federacao: {
    title: "Federação",
    type: "page"
  },
  posts: {
    title: "Posts",
    type: "page"
  },
  contato: {
    title: "Contato",
    type: "page"
  },
  "area-do-aluno": {
    title: "Área do Aluno ↗",
    type: "page",
    href: "https://intranetfsakm.com.br/",
    newWindow: true
  }
}
