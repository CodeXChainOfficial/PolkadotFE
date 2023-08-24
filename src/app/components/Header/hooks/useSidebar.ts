import useSWRLocal from "swr/immutable"

export const useSidebar = () => {
  const result = useSWRLocal<Boolean>("xnames-sidebar-toggle")

  return {
    setState: result.mutate,
    isOpen: result.data || false,
  }
}
