import { TooltipText } from "app/components/TooltipText"
import { useDispatch, useSelector } from "react-redux"
import { RegInfoItem } from "./InfoItem"
import { YearInput } from "app/components/Inputs/YearInput"
import { GlobalSelectors } from "app/selectors"
import { globalActions } from "app/slice"
import { getExpirationTime } from "utils/getExpirationTime"

export const NumOfYears = () => {
  const dispatch = useDispatch()
  const yearCount = useSelector(GlobalSelectors.registerDuration)
  const domainDetails = useSelector(GlobalSelectors.domaintoRegister)
  const isExtend = domainDetails?.extending

  const maxYearCount = getMaxYearCount(domainDetails?.expiresAt)

  let txtConent = "Registration Year"
  if (isExtend) txtConent = "Extend Year"

  const handleDecrease = () => {
    dispatch(globalActions.updateregisterDuration(yearCount - 1))
  }
  const handleIncrease = () => {
    dispatch(globalActions.updateregisterDuration(yearCount + 1))
  }

  const text = <TooltipText content={txtConent} icon="fa-solid fa-circle-info" />

  return (
    <RegInfoItem
      content={[
        text,
        <YearInput
          yearCount={yearCount}
          onDecrease={handleDecrease}
          onIncrease={handleIncrease}
          minYearCount={1}
          maxYearCount={maxYearCount}
        />,
      ]}
    />
  )
}

const getMaxYearCount = (expiresAt?: number) => {
  const MAX = 3

  if (!expiresAt) return MAX

  const maxYearCount = MAX - (getExpirationTime(expiresAt).year + 1)
  return maxYearCount > MAX ? MAX : maxYearCount
}
