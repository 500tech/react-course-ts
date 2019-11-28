function add(x, y) {
  return x + y;
}

describe('add', () => {
  it('works', () => {
    expect(add(3, 4)).toBe(7);
  });

  it('really works', () => {
    expect(add(0, 1)).toBe(1);
  });
});
