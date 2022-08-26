import { describe, expect, it } from "vitest";
import { add } from "./main";

describe(add.name, () => {
  it("2 + 3 = 5", () => {
    expect(add(2, 3)).toEqual(5);
  });
});
