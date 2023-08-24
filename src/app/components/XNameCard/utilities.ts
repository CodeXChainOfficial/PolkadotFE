export function formatCreatedDate(createdAt?: number) {
  const createdDate = new Date(createdAt ?? "")

  if (Number.isNaN(createdDate.getMonth())) return "---"

  const [_, m, dn, yr] = createdDate.toDateString().split(" ") // ==> ["Fri", "Apr", "23", "2023"]

  const date = `${dn} ${m} ${yr}`

  return date
}
