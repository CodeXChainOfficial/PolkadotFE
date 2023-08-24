import DOMPurify from "dompurify"
import { Grid } from "@mui/material"
import React from "react"
import { QuestionAnswerCol } from "./styles"
import { Collapse } from "./collapse"
import { DropDownCollapseData } from "./types"

interface DropDownPropsI {
  items: DropDownCollapseData[]
  justify?: "flex-start" | "flex-end" | "center"
}

export default function DropDown({ items, justify = "flex-start" }: DropDownPropsI) {
  const [activeCollapse, setActiveCollapse] = React.useState<Number>(1)

  return (
    <Grid container spacing={3} justifyContent={justify}>
      <Grid item xs={12} sm={10} md={8}>
        {items.map((item) => (
          <QuestionAnswerCol key={item.id} onClick={() => setActiveCollapse(item.id)}>
            <Collapse show={activeCollapse === item.id} title={item.title}>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item.body),
                }}
              ></div>
            </Collapse>
          </QuestionAnswerCol>
        ))}
      </Grid>
    </Grid>
  )
}
