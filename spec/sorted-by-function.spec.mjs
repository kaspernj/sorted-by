import {sortedByFunction} from "../index.mjs"

describe("sortedByFunction", () => {
  const peopleWithNames = [
    {
      name: () => "Kasper",
      age: () => 10
    },
    {
      name: () => "Christina",
      age: () => 5
    },
    {
      name: () => "Beowulf",
      age: () => null
    }
  ]

  it("sorts strings by function", () => {
    const sortedPeopleWithNames = sortedByFunction(peopleWithNames, "name")
    const sortedNames = sortedPeopleWithNames.map((person) => person.name())

    expect(sortedNames).toEqual(["Beowulf", "Christina", "Kasper"])
  })

  it("sorts numbers by function", () => {
    const sortedPeopleWithNames = sortedByFunction(peopleWithNames, "age")
    const sortedNames = sortedPeopleWithNames.map((person) => person.name())

    expect(sortedNames).toEqual(["Beowulf", "Christina", "Kasper"])
  })
})
