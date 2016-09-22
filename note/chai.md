# chai

## euqla
 等于
## eql(value)
  等于
# .above(value)

@param { Number } value
@param { String } message _optional_
Asserts that the target is greater than value.

expect(10).to.be.above(5);
Can also be used in conjunction with length to assert a minimum length. The benefit being a more informative error message than if the length was supplied directly.

expect('foo').to.have.length.above(2);
expect([ 1, 2, 3 ]).to.have.length.above(2);
.least(value)

@param { Number } value
@param { String } message _optional_
Asserts that the target is greater than or equal to value.

expect(10).to.be.at.least(10);
Can also be used in conjunction with length to assert a minimum length. The benefit being a more informative error message than if the length was supplied directly.

expect('foo').to.have.length.of.at.least(2);
expect([ 1, 2, 3 ]).to.have.length.of.at.least(3);
.below(value)

@param { Number } value
@param { String } message _optional_
Asserts that the target is less than value.

expect(5).to.be.below(10);
Can also be used in conjunction with length to assert a maximum length. The benefit being a more informative error message than if the length was supplied directly.

expect('foo').to.have.length.below(4);
expect([ 1, 2, 3 ]).to.have.length.below(4);
.most(value)

@param { Number } value
@param { String } message _optional_
Asserts that the target is less than or equal to value.

expect(5).to.be.at.most(5);
Can also be used in conjunction with length to assert a maximum length. The benefit being a more informative error message than if the length was supplied directly.

expect('foo').to.have.length.of.at.most(4);
expect([ 1, 2, 3 ]).to.have.length.of.at.most(3);
.within(start, finish)
