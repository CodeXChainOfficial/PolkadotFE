import { handleTabScrollOnSelect } from "app/components/Tabs/utilities"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"
import { media } from "styles/media"
import { DomainDetailTabs } from "../constants"

interface Props {
  tab: number
  setTab: (tab: number) => void
}

export const SideBar = ({ tab, setTab }: Props) => {
  return (
    <Wrapper onClick={handleTabScrollOnSelect}>
      <Ul>
        {DomainDetailTabs.map((item, idx) => (
          <Item key={item.name} className={idx === tab ? "active-item" : ""} onClick={() => setTab(idx)}>
            {item.name}
          </Item>
        ))}
      </Ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;

  ${media.sm} {
    overflow-x: auto;
    min-height: 40px;

    &::-webkit-scrollbar {
      width: 1px;
      height: 1px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: none;
    }
  }
`

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3px;

  ${media.sm} {
    position: absolute;
    flex-direction: row;
    width: max-content;
  }
`

const Item = styled.li`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 28px;
  width: max-content;
  padding: 2px 12px;
  border-radius: 8px;
  border: 3px solid transparent;
  color: ${CssVariables.Neutral400};
  transition: 0.4s linear;
  cursor: pointer;

  &.active-item {
    background-color: ${CssVariables.Green400};
    color: ${CssVariables.Neutral900};
    border-color: ${CssVariables.Green2};
    transition: 0.4s ease-in;
  }
`
