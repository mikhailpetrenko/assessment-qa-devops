const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test("return an array", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr = shuffle(arr);
    expect(Array.isArray(shuffledArr)).toBe(true);
  });

  test("return an array of the same length as the argument sent in", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr = shuffle(arr);
    expect(shuffledArr.length).toBe(arr.length);
  });

});
