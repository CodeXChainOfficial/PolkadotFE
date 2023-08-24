import styled from "@emotion/styled"
import { addressMinimizer } from "utils/formatters"
import { FontAwesomeIcon } from "./FontAwesomeIcon"
import { toast } from "react-toastify"
import { useState } from "react"

interface Props {
  showCopyIcon?: boolean
  address?: string
  maxChar?: number
  iconColor?: string
}

export const Address = (props: Props) => {
  const [copied, setCopied] = useState(false)

  let { showCopyIcon = true, address = "---", maxChar, iconColor } = props

  if (maxChar) address = addressMinimizer(address, { maxChar })

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)

      setTimeout(() => setCopied(false), 1000)
    } catch (error) {
      toast.error("Couldn't copy the address.")
      toast.error("Try it again.", { delay: 2000 })
    }
  }

  return (
    <Wrapper>
      <span>{address}</span>

      {showCopyIcon && (
        <>
          {!copied && (
            <FontAwesomeIcon
              icon="fa-solid fa-clone"
              style={{ cursor: "pointer" }}
              onClick={handleCopy}
              color={iconColor}
            />
          )}

          {copied && <FontAwesomeIcon icon="fa-solid fa-badge-check" color={iconColor} />}
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`
