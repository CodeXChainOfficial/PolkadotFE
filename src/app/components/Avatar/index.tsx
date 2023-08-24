import { FC, CSSProperties } from "react"
import Jdenticon from "react-jdenticon"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { CssVariables } from "styles/glob-styles"

interface Props extends CSSProperties {
  name?: string
  src?: string
}

export const Avatar: FC<Props> = ({ src, name = "", ...props }) => {
  return <Wrapper style={{ ...props }}>{src ? <Image src={src} /> : <Jdenticon value={name} />}</Wrapper>
}

const Wrapper = styled.div`
  background: ${CssVariables.White};
  width: 120px;
  height: 120px;
  border-radius: 6px;
  overflow: hidden;
  ${(props: Props) =>
    !props.src &&
    css`
      border: 10px solid ${CssVariables.GrayWhite};
    `}
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
