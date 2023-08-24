import styled from "@emotion/styled"
import { Header } from "app/components/Header"
import { Footer } from "app/components/Footer"
import { media } from "styles/media"
import { ApplicationRoutes } from "./Routes"

export const AppContent = () => {
  return (
    <Layout>
      <Header />

      <RoutesWrapper>
        <ApplicationRoutes />
      </RoutesWrapper>

      <Footer />
    </Layout>
  )
}

const Layout = styled.div`
  padding: 10px;
  padding-block-start: 0;
  ${media.md} {
    padding: 0;
  }
`
const RoutesWrapper = styled.div`
  min-height: 530px;
`
