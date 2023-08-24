import { forwardRef } from "react"
import styled from "@emotion/styled"
// import gsap from "gsap"

type Props = { address?: string; parentRef?: any }

export const FloatingAddress = forwardRef((props: Props) => {
  const { address } = props
  const cname = "x-name-card-floating-address-j12d4"

  // useEffect(() => {
  //   const parent = (parentRef as RefObject<HTMLDivElement>).current

  //   if (!parent) return

  //   const height = parent.clientHeight

  //   const item = `.${cname}`

  //   const animation = gsap.fromTo(
  //     item,
  //     { y: -height },
  //     {
  //       y: height,
  //       duration: 10,
  //       ease: "none",
  //       stagger: {
  //         each: 6,
  //         repeat: -1,
  //         repeatDelay: 1.2,
  //         ease: "none",
  //       },
  //     }
  //   )

  //   return () => {
  //     animation.revert()
  //   }
  // }, [address, parentRef])

  return (
    <>
      <Div className={cname}>{address}</Div>
      {/* <Div className={cname}>{address}</Div> */}
    </>
  )
})

const Div = styled.div`
  position: absolute;
  rotate: 90deg;
  transform-origin: left top;
  left: 20px;
  font-size: 10px;
  font-weight: 400;
  line-height: 20px;
  pointer-events: none;
`
