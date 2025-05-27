import {Card, CardContent} from "@/src/components/ui/card";
import {Button} from "@/src/components/ui/button";
import {ArrowRight} from "lucide-react";
import Link from "next/link";

export default function KravMagaCards() {
  const cards = [
    {
      title: "KRAV MAGA",
      description: "Conheça mais sobre a defesa pessoal do exército israelense.",
      image: "/placeholder.svg?height=300&width=400&query=krav maga training class with people on mats",
      buttonText: "SAIBA MAIS",
      href: "/krav-maga",
    },
    {
      title: "NOSSAS ACADEMIAS",
      description: "Encontre a academia mais próxima de você e comece a treinar em qualquer uma de nossas academias.",
      image: "/placeholder.svg?height=300&width=400&query=martial arts academy gym with training equipment",
      buttonText: "SAIBA MAIS",
      href: "/academias",
    },
    {
      title: "TREINAMENTO MILITAR",
      description:
        "Conheça as técnicas utilizadas pelas forças militares e policiais para proteção em situações de risco.",
      image: "/placeholder.svg?height=300&width=400&query=military tactical training with two people in gear",
      buttonText: "SAIBA MAIS",
      href: "/krav-maga/militar",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Link key={index} href={card.href} className="block">
            <Card className="relative overflow-hidden h-80 group hover:scale-105 transition-transform duration-300">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${card.image})`,
                }}
              />
              <div className="absolute inset-0 bg-black/40" />
              <CardContent className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">{card.title}</h2>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed">{card.description}</p>
                </div>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 w-fit transition-all duration-300 group-hover:bg-blue-700 cursor-pointer"
                  size="lg">
                  {card.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
