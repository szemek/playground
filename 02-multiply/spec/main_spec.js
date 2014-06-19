describe("multiply function", function() {
  it("returns 2 for multiply(1,2)", function() {
    expect(multiply(1,2)).toEqual(2);
  });

  it("returns 6 for multiply(2,3)", function() {
    expect(multiply(2,3)).toEqual(6);
  });

  it("returns 12 for multiply(3,4)", function() {
    expect(multiply(3,4)).toEqual(12);
  });

  it("returns 20 for multiply(4,5)", function() {
    expect(multiply(4,5)).toEqual(20);
  });
});