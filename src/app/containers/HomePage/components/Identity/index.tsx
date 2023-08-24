import { Title } from "app/components/Typography"
import { CssVariables } from "styles/glob-styles"
import { XNameSearch } from "../XNameSearch"

const content = {
  title: "Own your identity on Polkadot.",
  subTitle: "Buy, trade, and manage your name.",
}

export const Identity = () => {
  return (
    <>
      <Title data-cy="title-1" type={{ lg: "52r57.2", sm: "40r47" }} content={content.title} textAlign="left" />
      <Title
        data-cy="title-2"
        type={{ lg: "52r57.2", sm: "40r47" }}
        content={content.subTitle}
        color={CssVariables.Neutral600}
        textAlign="left"
        mb={40}
      />

      <XNameSearch />
    </>
  )
}
