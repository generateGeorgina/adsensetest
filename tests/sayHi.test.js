import { sayHi } from "../say_hi.js";
import { add } from "../say_hi.js";
test("Returns a greeting as a string", function () {
  // should return a string
  expect(typeof sayHi()).toBe("string");
});

test("Returns a greeting as a string", function () {
  // should return a string
  expect(typeof sayHi()).toBe("string");

  // should include the provided name
  expect(sayHi("Merlin").includes("Merlin")).toBe(true);
});

describe("Basic maths", () => {
  test("addition", () => {
    expect(add(1, 1)).toBe(2);
  });
});
