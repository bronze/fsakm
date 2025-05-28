import {Card, CardContent} from "@/src/components/ui/card";
import {Button} from "@/src/components/ui/button";
import {ArrowRight} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {cn} from "@/src/lib/utils";

interface CardLinkProps {
  title: string;
  description: string;
  image: string;
  buttonText?: string;
  href: string;
  priority?: boolean;
  layout?: "overlay" | "bottom";
  hover?: boolean;
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
  const showButton = buttonText && buttonText.trim() !== "";

  return (
    <Link href={href} className="block group">
      <Card
        className={cn(hover && "hover:scale-105 transition-transform duration-300", "relative overflow-hidden h-80")}>
        <div className="absolute inset-0 w-full h-full">
          <Image src={image} alt={title} fill style={{objectFit: "cover"}} className="z-0" priority={priority} />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <CardContent className="relative z-20 h-full flex flex-col justify-between p-6 text-white">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">{title}</h2>
            {layout !== "bottom" && (
              <>
                <p className="text-sm group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                  {description}
                </p>
              </>
            )}
          </div>
          {showButton && (
            <Button
              variant="default"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 w-fit transition-all duration-300 group-hover:bg-blue-700 cursor-pointer">
              {buttonText}
              <ArrowRight className="ml-2" />
            </Button>
          )}
          {layout === "bottom" && (
            <>
              <p className="text-sm group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                {description}
              </p>
            </>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
