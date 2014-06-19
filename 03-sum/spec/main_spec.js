describe("sum function", function() {
  it("returns 0 for sum([])", function() {
    expect(sum([])).toEqual(0);
  });

  it("returns 1 for sum([1])", function() {
    expect(sum([1])).toEqual(1);
  });

  it("returns 3 for sum([1,2])", function() {
    expect(sum([1,2])).toEqual(3);
  });

  it("returns 6 for sum([1,2,3])", function() {
    expect(sum([1,2,3])).toEqual(6);
  });
});