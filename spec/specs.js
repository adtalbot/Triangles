describe('isTriangle', function() {
  it('determines if 3 sides create a valid triangle', function() {
    expect(isTriangle(2, 2, 4000)).to.equal(false)
  });
});

describe('triangleType', function() {
  it('determines if 3 sides make an equilateral triangle', function() {
    expect(triangleType(7,7,7)).to.equal('equilateral')
  });

  it('determines if 3 sides make an isosceles triangle', function() {
    expect(triangleType(7,7,4)).to.equal('isosceles')
  });

  it('determines if 3 sides make a scalene triangle', function() {
    expect(triangleType(2,3,4)).to.equal('scalene')
  });
});

describe('triangle', function() {
  it('returns the triangle type for a valid triangle', function() {
    expect(triangle(2,3,4)).to.equal('scalene')
  });
});
