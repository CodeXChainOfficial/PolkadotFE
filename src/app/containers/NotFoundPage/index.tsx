import { Wrapper, Title, Content, SubTitle, Buttons, Warning, Img } from "./style"

import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { Box, Container } from "@mui/material"
import notFoundImg from "images/404.svg"
import { Button } from "app/components/Button"
import { useTranslation } from "react-i18next"
import { translations } from "locales/i18n"
import { goBack } from "connected-react-router"
import { useDispatch } from "react-redux"

export function NotFoundPage() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const hanldeGoBack = () => dispatch(goBack())

  return (
    <>
      <Helmet>
        <title>{t(translations.NotFoundPage.HeadTitle())}</title>
        <meta name="description" content={t(translations.NotFoundPage.HeadDescription())} />
      </Helmet>
      <Container>
        <Wrapper>
          <Content>
            <Warning>{t(translations.NotFoundPage.Warning())}</Warning>
            <Title>{t(translations.NotFoundPage.Title())}</Title>
            <SubTitle>{t(translations.NotFoundPage.SubTitle())}</SubTitle>
            <Buttons>
              <Button onClick={hanldeGoBack} btn="primary" btnSize="md" width="max-content">
                <ArrowBackIcon fontSize="small" />
                <Box ml={1}>{t(translations.NotFoundPage.GoBackLabel())}</Box>
              </Button>
              <Link to="/">
                <Button
                  content={t(translations.NotFoundPage.GoHomeLabel())}
                  btn="secondary"
                  btnSize="md"
                  width="max-content"
                />
              </Link>
            </Buttons>
          </Content>
          <Img src={notFoundImg} alt={t(translations.NotFoundPage.Warning())} />
        </Wrapper>
      </Container>
    </>
  )
}
