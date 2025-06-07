import React from "react"
import {cn} from "@/src/lib/utils"

type BlockquoteProps = {
  children?: React.ReactNode
  className?: string
}

const Blockquote = ({children, className}: BlockquoteProps) => {
  return (
    <div
      className={cn(
        "my-8 relative rounded-lg pl-16 pr-5 font-sans text-lg italic leading-relaxed before:absolute before:left-3 before:top-3 before:font-serif before:text-7xl before:text-gray-700 before:content-['“']",
        className
      )}>
      {children}
    </div>
  )
}

const BlockquoteAuthor = ({children, className}: BlockquoteProps) => {
  return (
    <p
      className={cn(
        "mt-4 pr-4 text-right font-semibold not-italic",
        className
      )}>
      {children}
    </p>
  )
}

export {Blockquote, BlockquoteAuthor}
