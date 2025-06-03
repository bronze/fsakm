"use client"

import * as React from "react"
import Image from "next/image"
import {Button} from "@/src/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/src/components/ui/carousel"
import {Dialog, DialogContent} from "@/src/components/ui/dialog"
import {cn} from "@/src/lib/utils"
import ClassNames from "embla-carousel-class-names"
import {ChevronLeft, ChevronRight} from "lucide-react"

interface GalleryItemProps {
  src: string
  title: string
  index: number
  galleryId: string
}

interface GalleryProps {
  children: React.ReactElement<Partial<GalleryItemProps>>[]
  dictionary: any
}

interface GalleryContextType {
  openLightbox: (index: number) => void
  galleryId: string
}

const GalleryContext = React.createContext<GalleryContextType | null>(null)

export function GalleryItem({src, title, index, galleryId}: GalleryItemProps) {
  const context = React.useContext(GalleryContext)

  const handleClick = () => {
    if (context && context.galleryId === galleryId) {
      context.openLightbox(index)
    }
  }

  return (
    <div
      className="cursor-pointer group relative overflow-hidden rounded-lg"
      onClick={handleClick}
      data-gallery-item
      data-src={src}>
      <Image
        src={src || "/placeholder.svg"}
        alt={title}
        width={400}
        height={300}
        className="aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <h3 className="text-white text-sm font-medium">{title}</h3>
      </div>
    </div>
  )
}

export function Gallery({children, dictionary}: GalleryProps) {
  const galleryId = React.useId()
  const [lightboxOpen, setLightboxOpen] = React.useState(false)
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
  const [lightboxApi, setLightboxApi] = React.useState<CarouselApi>()
  const [mainApi, setMainApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const previousLabel = dictionary?.gallery?.PreviousImage || "Imagem anterior"
  const nextLabel = dictionary?.gallery?.NextImage || "Próxima imagem"

  const images = React.useMemo(() => {
    return React.Children.map(children, child => ({
      src: child.props.src,
      title: child.props.title,
    }))
  }, [children])

  const openLightbox = React.useCallback((index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }, [])

  const closeLightbox = () => setLightboxOpen(false)

  React.useEffect(() => {
    if (!mainApi) return
    setCount(mainApi.scrollSnapList().length)
    setCurrent(mainApi.selectedScrollSnap() + 1)

    mainApi.on("select", () => {
      setCurrent(mainApi.selectedScrollSnap() + 1)
    })
  }, [mainApi])

  React.useEffect(() => {
    if (lightboxApi && lightboxOpen) {
      lightboxApi.scrollTo(currentImageIndex)
    }
  }, [lightboxApi, currentImageIndex, lightboxOpen])

  React.useEffect(() => {
    if (!lightboxApi) return

    const api = lightboxApi
    const onSelect = () => {
      const selected = api.selectedScrollSnap()
      setCurrentImageIndex(selected)
      mainApi?.scrollTo(selected)
    }

    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [lightboxApi, mainApi])

  const contextValue = React.useMemo(
    () => ({
      openLightbox,
      galleryId,
    }),
    [openLightbox, galleryId]
  )

  return (
    <GalleryContext.Provider value={contextValue}>
      <div data-gallery={galleryId} className="w-full x-auto">
        <Carousel
          setApi={setMainApi}
          className="w-full"
          opts={{align: "center", loop: true}}
          plugins={[ClassNames()]}>
          <CarouselContent className="-ml-2 md:-ml-4 max-h-[250px]">
            {React.Children.map(children, (child, index) => (
              <CarouselItem
                key={index}
                className="slide pl-2 md:pl-4 basis-[60%] @lg:basis-[50%]  @2xl:basis-[40%] @4xl:basis-[25%]">
                {React.cloneElement(child, {
                  index,
                  galleryId,
                })}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <Button
              aria-label={previousLabel}
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={() => mainApi?.scrollPrev()}
              disabled={!mainApi}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              aria-label={nextLabel}
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={() => mainApi?.scrollNext()}
              disabled={!mainApi}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex gap-2">
            {Array.from({length: count}, (_, index) => (
              <button
                key={index}
                aria-label={`Ir para slide ${index + 1}${images?.[index]?.title ? `: ${images[index].title}` : ""}`}
                className={cn(
                  "h-2 w-2 rounded-full transition-colors",
                  index + 1 === current
                    ? "bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                onClick={() => mainApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>

        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-7xl w-full p-0 bg-black/95 border-none">
            <div className="relative w-full h-full flex items-center justify-center">
              <Carousel
                setApi={setLightboxApi}
                className="w-full h-full max-w-[90vw]"
                opts={{startIndex: currentImageIndex, loop: true}}>
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem
                      key={index}
                      className="h-full flex items-center justify-center">
                      <div className="relative max-w-full max-h-[90vh] flex flex-col items-center justify-center p-8">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.title}
                          width={1200}
                          height={800}
                          className="max-w-full max-h-[70vh] object-contain"
                          priority={index === currentImageIndex}
                        />
                        <h2 className="text-white text-xl font-semibold mt-4 text-center">
                          {image.title}
                        </h2>
                        <p className="text-white/70 text-sm mt-2">
                          {index + 1} of {images.length}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <Button
                  aria-label={previousLabel}
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12"
                  onClick={() => lightboxApi?.scrollPrev()}>
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  aria-label={nextLabel}
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12"
                  onClick={() => lightboxApi?.scrollNext()}>
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </Carousel>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </GalleryContext.Provider>
  )
}
