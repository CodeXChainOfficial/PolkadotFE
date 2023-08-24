export const getFormData = (form: HTMLFormElement) => {
  const elements = Array.from(form.elements) as HTMLInputElement[]

  const data = elements.reduce(
    (acc, el) => {
      const name = el.name
      if (!name) return acc

      let value: string | undefined = undefined

      // This is for custom value type, eg, an object.
      if (el.dataset.value) value = JSON.parse(el.dataset.value)
      else value = el.value || undefined

      acc[name] = value

      return acc
    },
    {} as Record<string, any>,
  )

  return data
}

/**
 * Shallow object equality check
 *
 * @param obj1 Record<string, any>
 * @param obj2 Record<string, any>
 * @returns boolean
 */
export const objectIsEqual = (obj1: Record<string, any>, obj2: Record<string, any>) => {
  const values1 = Object.keys(obj1)
    .map((key) => obj1[key])
    .filter((value) => value)

  const values2 = Object.keys(obj2)
    .map((key) => obj2[key])
    .filter((value) => value)

  if (values1.length !== values2.length) return false

  for (let i = 0; i < values1.length; i++) {
    if (values1[i] !== values2[i]) return false
  }

  return true
}
