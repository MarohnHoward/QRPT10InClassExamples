describe("value testing", () => {
    test("strings are string", () => {
      expect("Hello World").toBe("Hello World");
      expect(stringCheck("word")).toBeTruthy();
      expect(stringCheck("a full sentence.")).toBeTruthy();
      expect(stringCheck(123456789)).toBeFalsy();
    });
    test("numbers are numbers", () => {
      expect(3.14159).toBe(3.14159);
      expect(numberCheck(.2342)).toBeTruthy();
      expect(numberCheck(3 + 1)).toBeTruthy();
      expect(numberCheck("3")).toBeFalsy();
    });
    test("booleans are booleans", () => {
      expect(5 > 10).toBe(false);
      expect(booleanCheck(5 < 10)).toBeTruthy();
      expect(booleanCheck(false)).toBeTruthy();
      expect(booleanCheck(4)).toBeFalsy();
    });
  });
  // booleans are true or false
  function numberCheck(x) {
    return typeof x == "number";
  }
  function stringCheck(x) {
    return typeof x == "string";
  }
  function booleanCheck(x) {
    return typeof x == "boolean";
  }