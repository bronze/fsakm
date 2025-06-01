"use client"

import {useState} from "react"
import Image from "next/image"
import {Dialog, DialogContent} from "@/src/components/ui/dialog"

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
                <svg
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
                </svg>
              </button>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ul>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-full w-[90vw] max-h-[90vh] overflow-auto text-center">
          {current?.imageUrl && (
            <div>
              <Image
                src={current.imageUrl}
                alt={current.label}
                width={800}
                height={600}
                className="mx-auto h-auto w-full max-w-4xl"
              />
              <p className="mt-4 font-semibold">{current.label}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
