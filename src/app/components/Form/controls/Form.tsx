import { FC, FormEvent, useEffect } from "react"
import styled from "@emotion/styled"
import { getFormData } from "../utilities"
import { FormControlProps } from "../types"

export const FormControl: FC<FormControlProps> = ({ onSubmit, children, form, initialData, ...rest }) => {
  const { Schema, setData: setFormData, setIsSubmitting } = form

  useEffect(() => {
    form.setInitialData(initialData ?? {})
  }, [])

  const raiseSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = getFormData(e.target as HTMLFormElement)
    const result = Schema.safeParse(data)

    if (result.success) {
      setIsSubmitting(true)
      onSubmit(data)
      return
    }

    setFormData(data)
  }

  return (
    <Element onSubmit={raiseSubmit} {...rest}>
      {children}
    </Element>
  )
}

const Element = styled.form``
