import { Images } from "app/constants"
import { BackgroundImage, Wrapper } from "./style"
import { Identity } from "../Identity"

export const Hero = () => {
  return (
    <Wrapper>
      <Identity />

      

      <BackgroundImage src={Images.homebg} alt="bg-img" />
    </Wrapper>
  )
}
