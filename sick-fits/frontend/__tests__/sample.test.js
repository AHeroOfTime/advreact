function add(a, b) {
  return parseInt(a + b);
}

describe('Sample test 101', () => {
  it('works as expected', () => {
    // we run our expect statements to see if the test will pass
    expect(1).toEqual(1);
    const age = 100;
    expect(age).toEqual(100);
  });
  it('runs the add function properly', () => {
    expect(add(1, 2)).toBeGreaterThanOrEqual(3);
  });
  it('can add strings of numbers together', () => {
    expect(add('1', '2')).toBeGreaterThanOrEqual(3);
  });
});
