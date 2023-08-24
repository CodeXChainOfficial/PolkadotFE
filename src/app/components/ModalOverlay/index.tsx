import { FC, MouseEvent, ReactNode, useEffect, useRef } from "react"
import styled from "@emotion/styled"
import { useMOAnim } from "./anim-hook"
import { ModalProps } from "types"
import { LayoutProps } from "styled-system"
import { useDisableBodyScroll } from "hooks/useDisableScroll"

interface ModalElement extends HTMLDivElement {
  show: () => void
  showModal: () => void
  close: () => void
}

interface Props extends ModalProps, LayoutProps {
  className?: string
  children?: ReactNode
}

export const ModalOverlay: FC<Props> = ({ children, isOpen = false, onClose, ...rest }) => {
  const ref = useRef<ModalElement>(null)
  const childRef = useRef<HTMLDivElement>(null)

  const shouldUnmount = useMOAnim(ref, isOpen)

  useDisableBodyScroll(isOpen)

  useEffect(() => {
    const el = ref.current

    if (!el) return

    if (isOpen && !el.attributes.getNamedItem("open")) el.showModal()
    else if (shouldUnmount) el.close()
  }, [ref, shouldUnmount, isOpen])

  const raiseClose = (e: MouseEvent<HTMLElement>) => {
    if (e.target === ref.current) {
      if (onClose) onClose()
    }
  }

  if (shouldUnmount) return <></>

  return (
    <Dialog ref={ref as any} onClick={raiseClose}>
      <Content ref={childRef} {...rest}>
        {children}
      </Content>
    </Dialog>
  )
}

const Dialog = styled.dialog`
  overflow: hidden;
  position: fixed;
  max-width: unset;
  max-height: unset;
  width: 100vw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.322);
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    margin-left: 10px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    margin-left: 10px;
    background-color: var(--cyan);
  }
`

const Content = styled.div`
  overflow: auto;
  max-height: 95%;
`
