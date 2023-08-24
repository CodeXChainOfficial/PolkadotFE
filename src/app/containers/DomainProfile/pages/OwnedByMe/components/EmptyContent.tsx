import { Typography } from "app/components/Typography"
import styled from "@emotion/styled"

export const EmptyContent = ({ message = "Empty page" }: { message?: string }) => {
  return (
    <Wrapper>
      <Typography type="16m24" content={message} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 200px;
`
