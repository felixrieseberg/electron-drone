import pick from '../src/pick';

describe('Util: pick()', function () {
  it('should pick using a list of things to pick', function () {
    let a = {
      a: 1,
      b: 2,
      c: 3
    };
    let b = pick(a, 'b', 'c');

    expect(b.a).to.be.undefined;
    expect(b.b).to.be.ok;
    expect(b.c).to.be.ok;
  });

  it('should pick using an array of things to pick', function () {
    let a = {
      a: 1,
      b: 2,
      c: 3
    };
    let b = pick(a, ['b', 'c']);

    expect(b.a).to.be.undefined;
    expect(b.b).to.be.ok;
    expect(b.c).to.be.ok;
  });
});