import { CssVariables } from "styles/glob-styles"
import { Text, Title } from "../Typography"
import { Guides } from "./constant"
import { Block, StyledImg, Wrapper } from "./style"

export const UserGuide = () => {
  return (
    <Wrapper>
      {Guides.map((guide) => (
        <Block key={guide.id}>
<StyledImg src={guide.image} alt={guide.title} style={{ display: 'block', margin: '0px auto', width: '60%' }} />
          <Title type={{ lg: "20s22" }} content={guide.title} mt={24} />
          <Text type={{ lg: "21s23", sm: "14s16" }} content={guide.text} color={CssVariables.Neutral500} mt={18} />
        </Block>
      ))}
    </Wrapper>
  )
}
