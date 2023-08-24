import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { Text } from "app/components/Typography"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"

interface YearInputProps {
  onDecrease: () => void
  onIncrease: () => void
  yearCount: number
  minYearCount?: number
  maxYearCount?: number
}

export const YearInput = ({
  onDecrease,
  onIncrease,
  yearCount,
  minYearCount = 1,
  maxYearCount = 3,
  ...rest
}: YearInputProps) => {
  if (yearCount < minYearCount) yearCount = minYearCount

  const yearText = "Year" + (yearCount > 1 ? "s" : "")

  const isMaxed = minYearCount > maxYearCount

  return (
    <Wrapper {...rest}>
      <Icon disable={yearCount <= minYearCount} onClick={onDecrease} />

      <Text
        type="14m20"
        render="div"
        color={isMaxed ? CssVariables.Red400 : CssVariables.Neutral200}
        width="53px"
        textAlign="center"
      >
        {isMaxed ? (
          <>Maxed.</>
        ) : (
          <>
            <span>{yearCount}</span> <YearText>{yearText}</YearText>
          </>
        )}
      </Text>

      <Icon disable={yearCount >= maxYearCount} isMinus={false} onClick={onIncrease} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const YearText = styled.span`
  color: ${CssVariables.Neutral500};
`

// =========== Icon Below ============

type IconProps = {
  onClick: () => void
  isMinus?: boolean
  disable?: boolean
}

const Icon = ({ onClick, isMinus = true, disable }: IconProps) => {
  const icon = isMinus ? "fa-solid fa-minus" : "fa-solid fa-plus"

  const color = disable ? CssVariables.Neutral700 : CssVariables.Cyan

  const className = disable ? "disable" : ""

  return (
    <IconWrapper className={className} onClick={disable ? undefined : onClick}>
      <FontAwesomeIcon icon={icon} color={color as string} />
    </IconWrapper>
  )
}

const IconWrapper = styled.div`
  cursor: pointer;
  padding: 0 4px;

  &.disable {
    cursor: not-allowed;
  }
`
