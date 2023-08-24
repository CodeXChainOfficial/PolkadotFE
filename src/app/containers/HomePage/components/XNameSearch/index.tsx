import styled from "@emotion/styled"
import { FormEvent, useState } from "react"
import { CssVariables } from "styles/glob-styles"
import { Input } from "app/components/Form/styles"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { useNavigate } from "react-router-dom"
import { AppPages } from "app/constants"
import { Button } from "app/components/Button"
import { media } from "styles/media"

export const XNameSearch = () => {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!query) {
      return
    }

    navigate(AppPages.DomainPage + `/${query}`)
  }

  return (
    <Wrapper onSubmit={handleSearch} data-cy="form">
      <StyledInput
        placeholder="Search for your name.dot"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
        data-cy="input"
      />
      <SubmitAction
        type="submit"
        btnText="16m16"
        btn="success"
        width={{ lg: "max-width", sm: "30px" }}
        data-cy="search"
      >
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        <span>Search</span>
      </SubmitAction>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 650px;
  width: 100%;
  border-radius: 12px;
`
const StyledInput = styled(Input)`
  width: 100%;
  background-color: ${CssVariables.Neutral800};
  border-radius: inherit;
  padding: 4px 8px;
  height: 56px;
`
const SubmitAction = styled(Button)`
  position: absolute;
  right: 4px;
  height: 48px;
  border-radius: 8px;
  ${media.sm} {
    span {
      display: none;
    }
  }
`
