import React, { ReactNode } from "react"

type FlexProps = {
  children: ReactNode
  className?: string
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse"
  justifyContent?: "start" | "end" | "center" | "between" | "around" | "evenly"
  alignItems?: "start" | "end" | "center" | "baseline" | "stretch"
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse"
}

const Flex: React.FC<FlexProps> = ({
  children,
  className,
  flexDirection = "row",
  justifyContent = "start",
  alignItems = "stretch",
  flexWrap = "nowrap",
}) => {
  return (
    <div
      className={`flex flex-${flexDirection} justify-${justifyContent} items-${alignItems} flex-${flexWrap} ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  )
}

export default Flex
