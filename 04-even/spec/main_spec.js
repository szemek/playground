describe("even function", function() {
  it("returns [0,2,4] for even(5)", function() {
    expect(even(5)).toEqual([0,2,4]);
  });

  it("returns [0,2] for even(3)", function() {
    expect(even(3)).toEqual([0,2]);
  });

  it("returns [0,2] for even(2)", function() {
    expect(even(2)).toEqual([0,2]);
  });
});