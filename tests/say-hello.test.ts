import { sayHello } from "../src/say-hello";

describe("sayHello", function () {
  it("should return hello eko", function () {
    expect(sayHello("lukman")).toBe("lukman");
  });
});
