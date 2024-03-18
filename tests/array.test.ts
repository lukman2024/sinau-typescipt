describe("array", function () {
  it("should same with javascript", function () {
    const names: string[] = ["lukman", "eko", "budi"];
    const values: number[] = [1, 2, 3, 4];

    console.info(names);
    console.info(values);
  });

  it("should support readonly array", function () {
    const hobbies: ReadonlyArray<string> = ["membaca", "menulis"];
    console.info(hobbies);
    console.info(hobbies[0]);
    console.info(hobbies[1]);

    // hobbies[0] = "coding";
  });
  it("should support tuple", function () {
    const person: readonly [string, number] = ["lukman", 30];
  });
});
