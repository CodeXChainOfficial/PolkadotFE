import { FC } from "react"
import styled from "@emotion/styled"
import { layout, space, color, typography, border, flexbox } from "styled-system"
import { usePropReducer } from "./hook"
import { TypographyProps } from "./types/typography"
import { textElementConfig } from "./utilities"

export const Typography: FC<TypographyProps> = (props) => {
  let children = props.children

  const { content, ...reduced } = usePropReducer(props)
  children = content ?? children

  if (reduced.dangerouslySetInnerHTML) {
    reduced.dangerouslySetInnerHTML = {
      __html: reduced.dangerouslySetInnerHTML,
    } as any
  }

  return (
    <TextElement {...(reduced as any)} {...textElementConfig(reduced as any)}>
      {children}
    </TextElement>
  )
}

export const TextElement = styled.div`
  margin: 0;

  ${typography};
  ${layout};
  ${space};
  ${color};
  ${border};
  ${flexbox}
`
