const { expect } = require('chai');
const { mergeItems } = require('../merge-items');
describe("The mergeItems function", () => {
  const template = `
    <table>
      <tbody>
        <!-- Content here -->
      </tbody>
    </table>
  `;
  it("should return no <tr>s and no <td>s for no items", () => {
    let result = mergeItems(template, []);

    expect(result).to.not.contain('<tr>');
    expect(result).to.not.contain("</tr>");
    expect(result).to.not.contain("<td>");
    expect(result).to.not.contain("</td>");
  });

  it("should return a single <tr>, four <td>s, and a <form> for one uncompleted item", () => {
    let result = mergeItems(template, [{title: "Item 1", category: "one"}])
    let tds = result.split("<td>")
    expect(result).to.contain('<tr>');
    expect(result).to.contain("</tr>");
    expect(result).to.contain("<td>");
    expect(result).to.contain("</td>");
    expect(result).to.contain("</form>")
    expect(tds.length-1).to.eql(4);
  });

  it("should return a single <tr>, four <td>s, and no <form> for one completed item", () => {
    let result = mergeItems(template, [{title: "Item 1", category: "one", isComplete: true}])
    let tds = result.split("<td>")
    expect(result).to.contain('<tr>');
    expect(result).to.contain("</tr>");
    expect(result).to.contain("<td>");
    expect(result).to.contain("</td>");
    expect(result).to.not.contain("</form>")
    expect(tds.length-1).to.eql(4);
  });

  it("should return three <tr>s for three items", () => {
    let result = mergeItems(template, [{title: "Item 1", category: "one", isComplete: true},
    {title: "Item 2", category: "one", isComplete: true},
    {title: "Item 3", category: "one", isComplete: true}])
    expect(result).to.contain('<tr>');
    expect(result).to.contain("</tr>");
    let trs = result.split("<tr>")
    expect(trs.length-1).to.eql(3);
  });
});
