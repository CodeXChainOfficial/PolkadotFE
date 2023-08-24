/**
 *
 * Faqs
 *
 */

import { Helmet } from "react-helmet-async"
import DropDown from "app/components/DropDown"
import { FaqsContent } from "./constants"

export function Faqs() {
  return (
    <>
      <Helmet>
        <title>Faqs</title>
        <meta name="description" content="Faqs" />
      </Helmet>
      <DropDown items={FaqsContent} justify="center" />
    </>
  )
}
