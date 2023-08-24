import { Button } from "app/components/Button"
import { FormStyles } from "app/components/Form"
import styled from "@emotion/styled"

interface Props {
  query: string
  setQuery: (value: string) => void
}

export const InputBar = ({ query, setQuery }: Props) => {
  return (
    <Wrapper>
      <Input placeholder="Think of a domain name" value={query} onChange={(e) => setQuery(e.target.value)} />

      <Button
        btn="primary"
        btnText="16m24"
        content="Get it"
        height="55px"
        width={{ lg: "max-content", sm: "100%" }}
        mt={{ lg: "auto", sm: "10px" }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`

const Input = styled(FormStyles.Input)`
  width: min(400px, 100%);
  padding: 8px 12px;
`
