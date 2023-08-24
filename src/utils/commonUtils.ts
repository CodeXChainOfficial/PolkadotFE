import { toast } from "react-toastify"
import moment from "moment"
import { NameSuffix } from "app/constants"
import { ReactText } from "react"

export const copiedToClipboardMsg = () => {
  toast.success("Copied to clipboard!")
}

export const getToaster = function () {
  let toastId: ReactText | undefined = undefined

  const dismiss = () => {
    if (!toastId) return

    toast.dismiss(toastId)
    toastId = undefined
  }

  return {
    loading: () => {
      toastId = toast.info("Loading...")
    },
    errorLog: (error: any) => {
      dismiss()

      toast.error(error?.message || "An error occured. Please try again later.")
      console.log(error)
    },
    dismiss,
  }
}

export const formatExpirationDate = (expirationDate: string) => {
  return moment(new Date(expirationDate))?.format("hh:mm-DD/MM/YYYY")
}

export const byteSize = (str: string) => new Blob([str]).size

export const addNameSuffix = (name: string = "") => {
  if (!name.endsWith(".mvx")) {
    name = `${name}${NameSuffix}`
  }
  return `${name}`
}

export const removeNameSuffix = (name: string = "") => {
  const withoutSuffix = name.replace(/\.mvx/, "")
  return withoutSuffix
}

export const formatLocaleDate = (date: number) => {
  return new Date(date).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  })
}

export const strShortener = (str: string | undefined, length = 5) => {
  if (str && str.length >= length * 2) {
    return `${str.slice(0, length)}...${str.slice(str.length - length)}`
  }
  return str
}

export const removeEmptyKeys = (obj: Object): Object => {
  const result = { ...obj }
  for (const key in result) {
    if (result[key] === "" || result[key] === null) {
      delete result[key]
    }
    if (Array.isArray(result[key]) && result[key].length === 0) {
      delete result[key]
    }
  }
  return result
}

export const isExpried = (expriyData: number) => {
  return new Date(expriyData * 1000) > new Date()
}
