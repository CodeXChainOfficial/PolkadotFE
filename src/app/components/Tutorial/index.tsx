import { Text } from "app/components/Typography"
import { PageLayer } from "app/components/common/PageLayer"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"
import { TutorialCard } from "./TutorialCard"

export const Tutorial = () => {
  const title = "How to register your CodeX .dot domain in 3 easy steps."

  return (
    <Wrapper>
      <Text type="20m" content={title} color={CssVariables.Neutral300} mb="20px" />

      <Group>
        {list.map((item) => (
          <TutorialCard key={item.title} {...item} />
        ))}
      </Group>
    </Wrapper>
  )
}

const Wrapper = styled(PageLayer)`
  background-color: ${CssVariables.Color3};
`

const Group = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 26px;
`

// Tutorial item list

const list = [
  {
    count: 1,
    title: "Submit Request",
    text: "They integrate .bit to better serve their customers. Some of the apps are even born for .CodeX.",
  },
  {
    count: 2,
    title: "Approve Registration",
    text: "They integrate .bit to better serve their customers. Some of the apps are even born for .CodeX.",
  },
  {
    count: 3,
    title: "Registration Done",
    text: "They integrate .bit to better serve their customers. Some of the apps are even born for .CodeX.",
  },
]
