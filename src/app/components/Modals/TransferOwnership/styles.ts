import { CSSProperties } from "react"
import { ModalOverlay } from "app/components/ModalOverlay"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"
import { layout } from "styled-system"

export const Modal = styled(ModalOverlay)`
  box-sizing: border-box;
  display: grid;
  gap: 20px;
  width: min(459px, 100%);
  background-color: ${CssVariables.Black};
  border-radius: 16px;
  padding: 40px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 24px;
`

export const XCardWrapper = styled.div<CSSProperties>`
  display: flex;
  align-items: center;
  width: 100%;
  column-gap: 16px;
  overflow: hidden;
  background-color: ${CssVariables.Neutral800};

  ${layout}
`

export const InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`
