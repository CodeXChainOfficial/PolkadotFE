import { useHomePageSlice } from "./slice"

import { Hero } from "./components/Hero"
import { UserGuide } from "app/components/UserGuide"

import { ChoseXname } from "./components/ChoseXname"
import { Wrapper } from "./style"
import { BottomSearch } from "./components/BottomSearch"
import { Tutorial } from "app/components/Tutorial"

export const HomePage = () => {
  useHomePageSlice()

  return (
    <Wrapper>
      <Hero />

      

      <Tutorial />

      <UserGuide />

     
     

      <ChoseXname />

      <BottomSearch />
    </Wrapper>
  )
}
