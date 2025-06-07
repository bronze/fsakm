import Image from "next/image"
import Link from "next/link"
import {Badge} from "@/src/components/ui/badge"
import {Button} from "@/src/components/ui/button"
import {Award, MapPin, Shield} from "lucide-react"

export default function KravMagaHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0"></div>
      {/* Content */}
      <div className="relative z-10 mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="border-blue-600 text-blue-500 bg-blue-600/10">
                <Shield className="w-4 h-4 mr-2" />
                Federação Sul Americana
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="">KRAV</span>{" "}
                <span className="text-blue-600">MAGA</span>
                <br />
                <span className="text-3xl lg:text-4xl font-norma">
                  Mestre Kobi
                </span>
              </h1>

              <p className="text-xl lg:text-2xl max-w-2xl leading-relaxed">
                Aprenda o sistema de defesa pessoal mais eficaz do mundo.
                Desenvolva confiança, força e habilidades que podem salvar sua
                vida.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">35+</div>
                <div className="text-sm">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm">Academias Afiliadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">1M+</div>
                <div className="text-sm">Alunos</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold">
                <Link href="/federacao/instrutores">
                  Aula Experimental Grátis
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className=" px-8 py-4 text-lg">
                <Link href="/academias">Encontrar Academia</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-gray-800">
              <div className="flex items-center gap-2 ">
                <Award className="w-5 h-5 text-blue-600" />
                <span>Instrutores Qualificados</span>
              </div>
              <div className="flex items-center gap-2 ">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Presente em Todo Brasil</span>
              </div>
            </div>
          </div>

          {/* Right Column - Video/Image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                priority={true}
                src="/pt/images/home/mestre_kobi-hero.png"
                alt="Mestre Kobi"
                fill
                className="object-contain"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-2 bg-white text-black p-6 rounded-xl shadow-2xl max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg">Defesa Real</div>
                  <div className="text-gray-600 text-sm">
                    Técnicas do Exército Israelense
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
