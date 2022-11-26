import sortedByFunction from "../src/sorted-by-function.mjs"

describe("sortedByFunction", () => {
  const peopleWithNames = [
    {
      name: () => "Kasper"
    },
    {
      name: () => "Christina"
    }
  ]

  it("sorts by function", () => {
    const sortedPeopleWithNames = sortedByFunction(peopleWithNames, "name")
    const sortedNames = sortedPeopleWithNames.map((person) => person.name())

    expect(sortedNames).toEqual(["Christina", "Kasper"])
  })
})
