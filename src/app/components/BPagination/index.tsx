import styled from "@emotion/styled"
import { Pagination, PaginationProps } from "@mui/material"
import { CssVariables } from "styles/glob-styles"

type Props = {
  totalCount: number
  pageSize: number
  page: number
  onChange: (nextPage: number) => void
} & Omit<PaginationProps, "onChange">

export const BPagination = ({ totalCount, pageSize, page, onChange, ...rest }: Props) => {
  if (totalCount <= pageSize) return <></>

  function raiseChange(_, value: number) {
    onChange(value)
  }

  return (
    <StyledPagination
      count={Math.ceil(totalCount / pageSize)}
      page={page}
      onChange={raiseChange}
      variant="outlined"
      {...rest}
    />
  )
}

export const StyledPagination = styled(Pagination)`
  .MuiButtonBase-root {
    color: ${CssVariables.Neutral300};
    border: 1px solid ${CssVariables.Neutral500};
  }
  .Mui-selected {
    background-color: ${CssVariables.Neutral600} !important;
    color: ${CssVariables.Black};
  }

  .MuiPaginationItem-ellipsis {
    color: ${CssVariables.Neutral300};
  }
`
