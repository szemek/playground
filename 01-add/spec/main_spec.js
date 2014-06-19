describe("add function", function() {
  it("returns 3 for add(1,2)", function() {
    expect(add(1,2)).toEqual(3);
  });

  it("returns 5 for add(2,3)", function() {
    expect(add(2,3)).toEqual(5);
  });
});