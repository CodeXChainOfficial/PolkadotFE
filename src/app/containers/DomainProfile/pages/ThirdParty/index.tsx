import { Helmet } from "react-helmet-async"
import DomainDetailHeader from "./components/ThirdPartyHeader"
import { Wrapper } from "./styles"
import { UserInfo } from "./constants"

export const ThirdPartyPage = () => {
  return (
    <>
      <Helmet>
        <title>Domain detail page</title>
        <meta name="description" content="Domain detail page" />
      </Helmet>
      <Wrapper>
        <DomainDetailHeader {...UserInfo} />
      </Wrapper>
    </>
  )
}
