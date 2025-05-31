import {CardLink} from "@/src/components/cardlink"

export default function KravMagaCards() {
  const cards = [
    {
      title: "KRAV MAGA",
      description:
        "Conheça mais sobre a defesa pessoal do exército israelense.",
      image: "/pt/images/home/kra-maga-1b-2-1.jpg",
      buttonText: "SAIBA MAIS",
      href: "/krav-maga",
    },
    {
      title: "NOSSAS ACADEMIAS",
      description:
        "Encontre a academia mais próxima de você e comece a treinar em qualquer uma de nossas academias.",
      image: "/pt/images/home/foto-2-academia-1-2-1.jpg",
      buttonText: "SAIBA MAIS",
      href: "/academias",
    },
    {
      title: "TREINAMENTO MILITAR",
      description:
        "Conheça as técnicas utilizadas pelas forças militares e policiais para proteção em situações de risco.",
      image: "/pt/images/home/krav-maga-mestre-kobi-seguranca-militar-1-1.jpg",
      buttonText: "SAIBA MAIS",
      href: "/krav-maga/militar",
    },
  ]

  return (
    <div className="mx-auto py-8 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <CardLink
            hover={true}
            key={index}
            {...card}
            priority={index === 0}
            overlay={true}
          />
        ))}
      </div>
    </div>
  )
}
