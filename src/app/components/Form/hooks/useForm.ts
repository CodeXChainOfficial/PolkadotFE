import useDebounce from "hooks/useDebounce"
import { useMemo, useState } from "react"
import { z } from "zod"
import { objectIsEqual } from "../utilities"
import { FormData } from "../types"

export type Schema = z.AnyZodObject

export const useForm = (Schema: Schema) => {
  const [data, setData] = useState<FormData>({})
  const [initialData, setInitialData] = useState<FormData>({})

  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false)

  const [isSubmitting, setIsSubmitting] = useState(false)

  const dataHasChanged = useCheckIfDataChanged(initialData, data)

  const parseResult = Schema.safeParse(data)
  const isValid = parseResult.success
  const validationError = parseResult.success ? undefined : parseResult.error

  const setFormData = (data: FormData) => {
    setHasAttemptedSubmit(true)
    setData(data)
  }

  const setFormInitialData = (data: FormData) => {
    setData(data)
    setInitialData(data)
  }

  const setField = (name: string, value: any) => {
    setData({ ...data, [name]: value || undefined })
  }

  const handleSetTouched = (name: string) => {
    if (touched[name]) return

    const value = data[name]

    const truthy = value ? `${value}`.length > 0 : false

    setTouched({ ...touched, [name]: truthy })
  }

  const fieldIsActive = (name: string) => {
    return touched[name] || hasAttemptedSubmit
  }

  const resetForm = () => {
    setData({})
    setTouched({})
    setHasAttemptedSubmit(false)
    setIsSubmitting(false)
  }

  return {
    setField,
    setData: setFormData,
    setInitialData: setFormInitialData,
    setTouched: handleSetTouched,
    setIsSubmitting,
    resetForm,
    fieldIsActive,
    dataHasChanged,
    Schema,
    data,
    canSubmit: isValid && dataHasChanged,
    // touched,
    // hasAttemptedSubmit,
    isSubmitting,
    isValid,
    validationError,
    // canSubmit: !isSubmitting || isValid, // this is debatable because isValid and isSubmitting are sufficient for now.
  }
}

const useCheckIfDataChanged = (prevData: Record<string, any>, curData: Record<string, any>) => {
  const debouncedCurData = useDebounce(curData, 600)

  return useMemo(() => {
    return !objectIsEqual(prevData, debouncedCurData)
  }, [debouncedCurData])
}
