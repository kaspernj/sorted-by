const sortedByFunction = (array, functionName) => {
  const isNull = (value) => value === undefined || value === null

  return array.sort((item1, item2) => {
    const value1 = `${item1[functionName]()}`
    const value2 = `${item2[functionName]()}`

    if (isNull(value1) && !isNull(value2)) return -1
    if (!isNull(value1) && isNull(value2)) return 1

    if (typeof value1 == "string" && typeof value2 == "string") {
      return value1.localeCompare(value2)
    } else if (typeof value1 == "number" && typeof value2 == "number") {
      return value1 - value2
    }

    return 0
  })
}

export default sortedByFunction
