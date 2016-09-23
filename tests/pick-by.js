import pickBy from '../src/pick-by';

describe('Util: pickBy()', function () {
  it('should pick using an iteratee', function () {
    let a = {
      a: 1,
      b: 2,
      c: 3
    };
    let b = pickBy(a, (v, k) => k !== 'a');

    expect(b.a).to.be.undefined;
    expect(b.b).to.be.ok;
    expect(b.c).to.be.ok;
  });
});