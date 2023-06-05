import { add } from "@/utils/math"

describe("Utils -> add", () => {
  it("adds correctly", () => {
    expect(add(1, 2)).toBe(2)
  })
})
