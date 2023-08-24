import useSwrImutable from "swr/immutable"

type Data = {
  page: 1 | 2
  openModal: boolean
}

export const useDeleteSubdomainModal = () => {
  const initialData: Data = {
    page: 1,
    openModal: false,
  }

  const { data = initialData, mutate } = useSwrImutable<Data>("delete-subdomain-modal", { fallbackData: initialData })

  return {
    data,
    setPage: (page: 1 | 2) => {
      mutate({ ...data, page })
    },
    setOpenModal: (openModal: boolean) => {
      mutate({ ...data, openModal })

      if (openModal) return

      // Reset page but after a timeout.
      setTimeout(() => {
        mutate({ ...data, openModal: false, page: 1 })
      }, 1000)
    },
  }
}
