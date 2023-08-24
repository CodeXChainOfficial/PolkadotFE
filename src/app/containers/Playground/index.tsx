/**
 *
 * Playground
 *
 */

import { useDispatch } from "react-redux"
import { PlaygroundActions, usePlaygroundSlice } from "./slice"
import { Button } from "app/components/Button"
import { usePingpongTransactions, usePlaygroundTransactions } from "./hooks"

interface Props {}

export function Playground() {
  usePlaygroundSlice()
  usePingpongTransactions()
  usePlaygroundTransactions()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch()

  const fetchPingAmount = () => {
    dispatch(PlaygroundActions.fetchPingAmount())
  }
  const ping = () => {
    dispatch(PlaygroundActions.ping())
  }

  return (
    <>
      <div>
        <Button onClick={fetchPingAmount}>fetchPingAmount</Button>
        <Button onClick={ping}>ping</Button>
      </div>
    </>
  )
}
