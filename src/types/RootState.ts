import { RouterState } from "connected-react-router"
import { HomePageState } from "app/containers/HomePage/types"
import { GlobalState } from "app/types"
import { DomainPageState } from "app/containers/DomainPage/types"
import { UnlockState } from "app/containers/UnlockPage/types"
import { BlockchainState } from "app/containers/Blockchain/types"
import { ManageDomainPageState } from "app/containers/ManageDomainPage/types"
import { PlaygroundState } from "app/containers/Playground/types"
import { DomainProfileState } from "app/containers/DomainProfile/types"
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life. 
  So, not available always
*/
export interface RootState {
  blockchain?: BlockchainState
  year: any
  global?: GlobalState
  router?: RouterState
  homePage?: HomePageState
  domainPage?: DomainPageState
  unlock?: UnlockState
  manageDomainPage?: ManageDomainPageState
  playground?: PlaygroundState
  domainProfile?: DomainProfileState
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
