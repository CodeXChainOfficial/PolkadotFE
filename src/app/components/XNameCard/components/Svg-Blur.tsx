import styled from "@emotion/styled"
import { xlinkHrefData } from "../Svg-xlinkHrefData"

export const Blur = ({ fill = "#E5E5E5" }: { fill?: string }) => {
  return (
    <Wrapper>
      <svg
        width="593"
        height="636"
        viewBox="0 0 593 636"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g filter="url(#filter0_f_1362_55261)">
          <rect x="99" y="99" width="100%" height="100%" fill={fill} />
          <g style={{ mixBlendMode: "luminosity" }} opacity="0.6">
            <rect x="100" y="143" width="394" height="394" fill="url(#pattern0)" />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_1362_55261"
            x="0"
            y="0"
            width="100%"
            height="100%"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="49.5" result="effect1_foregroundBlur_1362_55261" />
          </filter>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_1362_55261" transform="scale(0.00217391)" />
          </pattern>
          <image id="image0_1362_55261" width="100%" height="100%" xlinkHref={xlinkHrefData} />
        </defs>
      </svg>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  width: 100%;
  height: 100%;

  svg {
    position: absolute;
    left: -100px;
    top: -60px;

    rect {
      /* fill: #2cef32; */
    }
  }
`
