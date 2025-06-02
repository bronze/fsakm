import type {FC, HTMLAttributes, ReactNode} from "react"
import React, {Children, cloneElement, isValidElement} from "react"
import cn from "clsx"

function extractYearFromText(text: string): string | null {
  const match = text.match(/\b(19|20)\d{2}\b/)
  return match?.[0] || null
}

export const YearSteps: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  style,
  ...props
}) => {
  let foundYear = null

  const enhancedChildren = Children.map(children, child => {
    if (
      !foundYear &&
      isValidElement(child) &&
      typeof child.type === "string" &&
      child.type === "h2"
    ) {
      const childElement = child as React.ReactElement<{
        children?: ReactNode
        id?: string
        className?: string
      }>
      const text =
        typeof childElement.props.children === "string"
          ? childElement.props.children
          : Array.isArray(childElement.props.children)
            ? childElement.props.children.join(" ")
            : ""

      const year = extractYearFromText(text)
      if (year) {
        foundYear = year
        return cloneElement(childElement, {
          id: year,
          className: cn("relative pl-6 ml-4", childElement.props.className),
          ...(year ? {["data-year"]: year} : {}),
        })
      }
    }

    return child
  })

  return (
    <div
      className={cn(
        "nextra-steps relative border-s border-gray-200 dark:border-neutral-800 ps-6 ms-4 mb-12",
        className
      )}
      style={style}
      {...props}>
      {enhancedChildren}
    </div>
  )
}
