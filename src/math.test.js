function add(x, y) {
  return x + y;
}

describe('add', () => {
  it('adds x and y', () => {
    expect(add(2, 3)).toBe(5);
  });
});
