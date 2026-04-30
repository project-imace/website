import { describe, it, expect } from "vitest"
import { cn } from "./utils"

describe("cn utility function", () => {
  it("should merge class names", () => {
    expect(cn("px-2", "py-1")).toBe("px-2 py-1")
  })

  it("should handle conditional classes", () => {
    expect(cn("px-2", true && "py-1", false && "p-4")).toBe("px-2 py-1")
  })

  it("should handle object inputs", () => {
    expect(cn({ "bg-red-500": true, "text-white": false })).toBe("bg-red-500")
  })

  it("should handle array inputs", () => {
    expect(cn(["px-2", "py-1"])).toBe("px-2 py-1")
  })

  it("should merge tailwind classes correctly using tailwind-merge", () => {
    // tailwind-merge should resolve conflicts, e.g., p-4 and p-2
    expect(cn("p-4", "p-2")).toBe("p-2")
    expect(cn("px-2 py-1", "p-4")).toBe("p-4")
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500")
  })

  it("should handle falsy values correctly", () => {
    expect(cn("px-2", null, undefined, false, 0, "")).toBe("px-2")
  })

  it("should handle nested arrays and objects", () => {
    expect(cn("px-2", ["py-1", { "bg-red-500": true }])).toBe("px-2 py-1 bg-red-500")
  })
})
