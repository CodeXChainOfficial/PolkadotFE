import { FC } from "react"
import { Body, Header } from "../../containers/HomePage/components/Faqs/style"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"

interface Props {
  show: boolean
  title: string
  children: React.ReactChild
}

export const Collapse: FC<Props> = ({ show = false, title, children }) => {
  return (
    <>
      <Header show={show}>
        {title}
        {show ? (
          <FontAwesomeIcon icon={`fa-solid fa-chevron-up`} fontSize="14px" />
        ) : (
          <FontAwesomeIcon icon={`fa-solid fa-chevron-down`} fontSize="14px" />
        )}
      </Header>
      <Body show={show}>{children}</Body>
    </>
  )
}
