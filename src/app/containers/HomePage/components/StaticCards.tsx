import { useEffect } from "react"
import styled from "@emotion/styled"
import gsap from "gsap"
import { Images } from "app/constants"
import { AnimationMedia, media } from "styles/media"

const cname = "home-static-card"

export const StaticCards = () => {
  useAnimation()

  return (
    <Wrapper>
      <Img src={Images.homeCardGray} alt="" className={cname} />
      <Img src={Images.homeCardGreen} alt="" className={cname} />
      <Img src={Images.homeCardCyan} alt="" className={cname} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  height: 230px;
  margin-block-start: auto;

  ${media.sm} {
    display: none;
  }
`

const Img = styled.img`
  position: absolute;

  ${media.md} {
    height: 250px;
  }
`

// ========== Animation

const useAnimation = () => {
  useEffect(() => {
    const item = `.${cname}`

    const mm = gsap.matchMedia()

    mm.add({ lg: AnimationMedia.lg_only, md: AnimationMedia.md_only }, (ctx) => {
      const device = ctx.conditions as { lg: boolean; md: boolean }

      const [first, second, third] = gsap.utils.toArray(item) as Element[]
      const side = [first, third]

      const rotation = gsap.utils.wrap([-20, 20])
      const xPercent = gsap.utils.wrap([-50, 60])

      if (device.lg) {
        gsap.set(second, { scale: 1.1, y: -15 })
        gsap.set(side, { scale: 0.9, rotation, xPercent, y: 30, zIndex: -1 })
      } else {
        gsap.set(second, { scale: 1.1, y: 60 })
        gsap.set(side, { scale: 0.9, rotation, xPercent, y: 100, zIndex: -1 })
      }

      gsap
        .timeline()
        .fromTo(item, { opacity: 0 }, { opacity: 1, duration: 0.2, ease: "linear" })
        .fromTo(item, { scale: 0 }, { scale: 1, stagger: 0.2, ease: "back", duration: 1 })
    })
  }, [])
}
