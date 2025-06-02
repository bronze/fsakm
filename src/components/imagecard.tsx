import Image from "next/image"
import {Card, CardContent} from "@/src/components/ui/card"

interface ImageCardProps {
  title: string
  src: string
}

const ImageCard: React.FC<ImageCardProps> = ({title, src}) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center p-6">
        <Image
          src={src}
          alt={title}
          width={200}
          height={200}
          className="rounded-md"
        />
        <span className="text-xl font-semibold mt-4">{title}</span>
      </CardContent>
    </Card>
  )
}

export default ImageCard
