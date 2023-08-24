import { useMemo } from "react"
import { fromZodError } from "zod-validation-error"
import { UseFormReturn } from "../types"
import useDebounce from "hooks/useDebounce"

export const useInputError = (name: string, form: UseFormReturn) => {
  const value = form.data[name]
  const isActive = form.fieldIsActive(name)

  const debouncedValue = useDebounce(value)

  let error = useMemo(() => {
    if (!isActive) return null // at this point, no check has been done; so, null

    const res = form.Schema.shape[name].safeParse(debouncedValue)

    if (res.success) return undefined // at this point, error is not defined ---> undefined

    return fromZodError(res.error).details[0].message
  }, [form, name, isActive, debouncedValue])

  return error
}
