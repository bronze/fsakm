import {Card, CardContent} from "@/src/components/ui/card";
import {Button} from "@/src/components/ui/button";
import {ArrowRight} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function KravMagaCards() {
  const cards = [
    {
      title: "KRAV MAGA",
      description: "Conheça mais sobre a defesa pessoal do exército israelense.",
      image: "/pt/images/home/kra-maga-1b-2-1.jpg",
      buttonText: "SAIBA MAIS",
      href: "/krav-maga",
    },
    {
      title: "NOSSAS ACADEMIAS",
      description: "Encontre a academia mais próxima de você e comece a treinar em qualquer uma de nossas academias.",
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
  ];

  return (
    <div className="container mx-auto py-8 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Link key={index} href={card.href} className="block">
            <Card className="relative overflow-hidden h-80 group hover:scale-105 transition-transform duration-300">
              {/* Use Next.js Image as background */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  style={{objectFit: "cover"}}
                  className="z-0"
                  priority={index === 0}
                />
              </div>
              <div className="absolute inset-0 bg-black/40 z-10" />
              <CardContent className="relative z-20 h-full flex flex-col justify-between p-6 text-white">
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
