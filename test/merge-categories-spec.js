const { expect } = require('chai');
const { mergeCategories } = require('../merge-categories');

describe("mergeCategories()", () => {
  context("Using <li> tags", () => {
    const template = `
      <div>
        <ul>
          <!-- Content here -->
        </ul>
      </div>
    `;


    it("should return no <li>s for no categories", () => {
      let actual = mergeCategories(template, [], 'li');
      actual = actual.includes('<li>');
      expect(actual).to.be.false;
      expect(result).to.contain('<div>');
      expect(result).to.contain('</div>');
      expect(result).to.contain('<ul>');
      expect(result).to.contain('</ul>');
    });

    it("should return a single <li> for one category", () => {
      let actual = mergeCategories(template, ["one"], "li")
      actual = actual.includes("<li>");
      expect(actual).to.be.true;
    });

    it("should return an <li> for each category", () => {
      let cat = ["one", "two"]
      let actual = mergeCategories(template, cat, "li")
      actual = actual.split("<li>").length - 1;
      expect(actual).to.be.eql(cat.length);
    });
  });

  context("using <option> tags", () => {
    const template = `
      <div>
        <select>
          <!-- Content here -->
        </select>
      </div>
    `;

    it("should return no <option>s for no categories", () => {
      let actual = mergeCategories(template, [], 'option');
      actual = actual.includes('<option>');
      expect(actual).to.be.false;
    });

    it("should return a single <option> for one category", () => {
      let actual = mergeCategories(template, ["one"], "option")
      actual = actual.includes("<option>");
      expect(actual).to.be.true;
    });

    it("should return an <option> for each category", () => {
      let cat = ["one", "two"]
      let actual = mergeCategories(template, cat, "option")
      actual = actual.split("<option>").length - 1;
      expect(actual).to.be.eql(cat.length);
    });
  });
});
