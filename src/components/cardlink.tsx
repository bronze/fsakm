import Image from "next/image"
import Link from "next/link"
import {Button} from "@/src/components/ui/button"
import {Card, CardContent} from "@/src/components/ui/card"
import {cn} from "@/src/lib/utils"
import {ArrowRight} from "lucide-react"

const cardstyles =
  "shadow shadow-gray-100 group-hover:shadow-lg dark:shadow-none text-gray-700 group-hover:text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-100 bg-gray-100 group-hover:bg-white dark:bg-neutral-800 dark:group-hover:bg-neutral-700 border-gray-200 group-hover:border-gray-300 dark:border-neutral-700 dark: group-hover: border-neutral-500"

interface CardLinkProps {
  title: string
  description: string
  image: string
  buttonText?: string
  href: string
  priority?: boolean
  layout?: "overlay" | "bottom"
  hover?: boolean
}

export function CardLink({
  title,
  description,
  image,
  buttonText,
  href,
  priority = false,
  layout = "overlay",
  hover = false,
}: CardLinkProps) {
  const showButton = buttonText && buttonText.trim() !== ""

  return (
    <Link href={href} className="block group min-w-64">
      <Card
        className={cn(
          hover && "group-hover:scale-105 transition-transform duration-300",
          "relative overflow-hidden h-80 "
        )}>
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={image}
            alt={title}
            fill
            style={{objectFit: "cover"}}
            className="z-0"
            priority={priority}
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <CardContent className="relative z-20 h-full flex flex-col justify-between p-6 text-white {``cardstyles``}">
          <div>
            <h2 className="text-2xl z-20 md:text-3xl  font-bold mb-3 leading-tight">
              {title}
            </h2>
            {layout !== "bottom" && (
              <>
                <p className="text-sm group-group-hover:text-gray-900 dark:group-group-hover:text-gray-100 transition-colors">
                  {description}
                </p>
              </>
            )}
          </div>
          {showButton && (
            <Button
              variant="default"
              size="lg"
              className="bg-blue-600 group-hover:bg-blue-700 text-white font-semibold py-3 px-6 w-fit transition-all duration-300  cursor-pointer">
              {buttonText}
              <ArrowRight className="ml-2" />
            </Button>
          )}
          {layout === "bottom" && (
            <>
              <p
                className={cn(
                  "text-sm absolute inset-x-0 inline-flex items-center bottom-0 p-4 group transition-colors after:content-[&quot;→&quot;] after:transition-transform after:duration-75",
                  cardstyles
                )}>
                {description}
                <ArrowRight className="ml-2 h-4" />
              </p>
            </>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}
