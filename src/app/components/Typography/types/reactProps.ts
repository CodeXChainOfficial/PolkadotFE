import { DetailedHTMLProps, HTMLAttributes } from "react"

export type HTMLElementProps = Omit<HTMLDivProps, "color" | "content" | "dangerouslySetInnerHTML">

export type AllowedHTMLTag = "div" | "a" | "button" | "p" | "span" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

type HTMLDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
