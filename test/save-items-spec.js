const { expect } = require('chai');
const { saveItems } = require('../save-items');
describe("The saveItems function", () => {
  it('adds the new item to the list', () => {
    let obj = {title: "Item 1", category: "one", isComplete: true};
    let result = saveItems([{title: "Item 1", category: "one", isComplete: true}], obj );
    let expected = result.includes(obj)
    expect(expected).to.be.true
  });

  it('makes sure the result and the original are different', () => {
    expect.fail('please write this test');
  });
});
