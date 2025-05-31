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
import {ChevronLeft, ChevronRight, X} from "lucide-react"

interface GalleryItemProps {
  src: string
  title: string
}

interface GalleryProps {
  children: React.ReactElement<GalleryItemProps>[]
}

interface GalleryContextType {
  openLightbox: (index: number) => void
}

const GalleryContext = React.createContext<GalleryContextType | null>(null)

export function GalleryItem({src, title}: GalleryItemProps) {
  const context = React.useContext(GalleryContext)
  const [imageIndex, setImageIndex] = React.useState<number | null>(null)

  React.useEffect(() => {
    // Get the index from the parent Gallery component
    const galleryElement = document.querySelector("[data-gallery]")
    if (galleryElement) {
      const items = Array.from(
        galleryElement.querySelectorAll("[data-gallery-item]")
      )
      const currentElement = document.querySelector(
        `[data-gallery-item][data-src="${src}"]`
      )
      if (currentElement) {
        setImageIndex(items.indexOf(currentElement))
      }
    }
  }, [src])

  const handleClick = () => {
    if (context && imageIndex !== null) {
      context.openLightbox(imageIndex)
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

export function Gallery({children}: GalleryProps) {
  const [lightboxOpen, setLightboxOpen] = React.useState(false)
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
  const [lightboxApi, setLightboxApi] = React.useState<CarouselApi>()
  const [mainApi, setMainApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  // Extract image data from children
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

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  // Main carousel API effects
  React.useEffect(() => {
    if (!mainApi) {
      return
    }

    setCount(mainApi.scrollSnapList().length)
    setCurrent(mainApi.selectedScrollSnap() + 1)

    mainApi.on("select", () => {
      setCurrent(mainApi.selectedScrollSnap() + 1)
    })
  }, [mainApi])

  // Update lightbox carousel when currentImageIndex changes
  React.useEffect(() => {
    if (lightboxApi && lightboxOpen) {
      lightboxApi.scrollTo(currentImageIndex)
    }
  }, [lightboxApi, currentImageIndex, lightboxOpen])

  // Update currentImageIndex when lightbox carousel changes
  React.useEffect(() => {
    if (!lightboxApi) return

    const api = lightboxApi
    const onSelect = () => {
      setCurrentImageIndex(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [lightboxApi])

  const contextValue = React.useMemo(
    () => ({
      openLightbox,
    }),
    [openLightbox]
  )

  return (
    <GalleryContext.Provider value={contextValue}>
      <div data-gallery className="w-full max-w-4xl mx-auto">
        {/* Main Gallery Carousel */}
        <Carousel
          setApi={setMainApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[ClassNames()]}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {React.Children.map(children, (child, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                {child}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Custom Navigation Controls */}
        <div className="flex items-center justify-between mt-4">
          {/* Arrow Controls - Left Side */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={() => mainApi?.scrollPrev()}
              disabled={!mainApi}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={() => mainApi?.scrollNext()}
              disabled={!mainApi}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dot Indicators - Right Side */}
          <div className="flex gap-2">
            {Array.from({length: count}, (_, index) => (
              <button
                key={index}
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

        {/* Lightbox Dialog */}
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-7xl w-full h-full p-0 bg-black/95 border-none">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
                onClick={closeLightbox}>
                <X className="h-6 w-6" />
              </Button>

              {/* Lightbox Carousel */}
              <Carousel
                setApi={setLightboxApi}
                className="w-full h-full max-w-[90vw]"
                opts={{
                  startIndex: currentImageIndex,
                  loop: true,
                }}>
                <CarouselContent className="">
                  {images?.map((image, index) => (
                    <CarouselItem
                      key={index}
                      className="h-full flex items-center justify-center">
                      <div className="relative max-w-full max-h-full flex flex-col items-center justify-center p-8">
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

                {/* Lightbox Navigation */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12"
                  onClick={() => lightboxApi?.scrollPrev()}>
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
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
