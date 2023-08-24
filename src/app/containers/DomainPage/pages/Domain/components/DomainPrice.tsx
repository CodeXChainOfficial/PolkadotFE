import { YearInput } from "app/components/Inputs/YearInput"
import { Text } from "app/components/Typography"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"
import { Images } from "app/constants"
import { useDispatch, useSelector } from "react-redux"
import { GlobalSelectors } from "app/selectors"
import { globalActions } from "app/slice"
import { Box } from "@mui/material"
import { getPriceToPay } from "utils/domainUtils"

export const DomainPrice = () => {
  const dispatch = useDispatch()
  const registerDuration = useSelector(GlobalSelectors.registerDuration)
  const increaseRegisterDuration = () => {
    dispatch(globalActions.updateregisterDuration(registerDuration + 1))
  }
  const decreaseRegisterDuration = () => {
    dispatch(globalActions.updateregisterDuration(registerDuration <= 1 ? 1 : registerDuration - 1))
  }

  const domainData = useSelector(GlobalSelectors.domainData)

  const { wegldPrice, usdPrice } = getPriceToPay({
    ...((domainData ?? {}) as any),
    duration: registerDuration,
  })

  if (!domainData) return <></>

  return (
    <Wrapper>
      <Box display="flex" gap="10px" alignItems="center">
        <Price type={{ lg: "30r33", sm: "16r20" }} content={`${wegldPrice} DOT`} />
        <DollarPrice type="16s20" content={`~$${usdPrice}`} color={CssVariables.Neutral500} />
      </Box>

      <StyledYearInput
        yearCount={registerDuration || 1}
        onIncrease={increaseRegisterDuration}
        onDecrease={decreaseRegisterDuration}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  border-radius: 16px;
  padding: 20px 32px;
  background-color: ${CssVariables.Neutral900};
`
const Img = styled.img``

const Price = styled(Text)``

const DollarPrice = styled(Text)``

const StyledYearInput = styled(YearInput)``
