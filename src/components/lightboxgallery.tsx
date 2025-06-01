"use client"

import {useState} from "react"
import Image from "next/image"
import {Dialog, DialogContent} from "@/src/components/ui/dialog"
import {FileImage} from "lucide-react"

interface Certificate {
  label: string
  imageUrl?: string
}

interface LightboxGalleryProps {
  certificates: Certificate[]
}

export function LightboxGallery({certificates}: LightboxGalleryProps) {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState<Certificate | null>(null)

  const handleOpen = (item: Certificate) => {
    setCurrent(item)
    setOpen(true)
  }

  return (
    <div className="x:[:is(ol,ul)_&]:my-3 x:not-first:mt-6 x:list-disc">
      <ul className="x:[:is(ol,ul)_&]:my-3 x:not-first:mt-6 x:list-disc x:ms-6">
        {certificates.map((item, index) => (
          <li key={index} className="x:my-2">
            {item.imageUrl ? (
              <button
                onClick={() => handleOpen(item)}
                className="text-blue-600 hover:underline cursor-pointer flex items-center gap-1 font-semibold">
                {item.label}
                <FileImage className="h-4" />
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                  viewBox="0 0 24 24"
                  height="1em"
                  className="inline align-baseline shrink-0">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg> */}
              </button>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ul>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          // className="max-w-7xl w-full h-full p-0 bg-black/95 border-none"
          className="p-4 max-w-[calc(min(90vmin,_80lvw))] bg-background border w-full h-full  shadow-xl rounded-md"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          {current?.imageUrl && (
            <div className="inline-block text-center">
              <Image
                src={current.imageUrl}
                alt={current.label}
                width={800}
                height={600}
                className="h-auto w-auto max-h-[85vh] max-w-[calc(min(90vmin,_80lvw))] mx-auto"
              />
              <p className="mt-4 font-semibold text-sm text-muted-foreground">
                {current.label}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
