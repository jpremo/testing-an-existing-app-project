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
      let truth = actual.includes('<li>');
      expect(truth).to.be.false;
      expect(actual).to.contain('<div>');
      expect(actual).to.contain('</div>');
      expect(actual).to.contain('<ul>');
      expect(actual).to.contain('</ul>');
    });

    it("should return a single <li> for one category", () => {
      let actual = mergeCategories(template, ["one"], "li")
      let truth = actual.includes("<li>");
      expect(truth).to.be.true;
      expect(actual).to.contain('<div>');
      expect(actual).to.contain('</div>');
      expect(actual).to.contain('<ul>');
      expect(actual).to.contain('</ul>');
      expect(actual).to.contain('<li>one</li>');
    });

    it("should return an <li> for each category", () => {
      let cat = ["one", "two"]
      let actual = mergeCategories(template, cat, "li")
      let len = actual.split("<li>").length - 1;
      expect(len).to.be.eql(cat.length);
      expect(actual).to.contain('<div>');
      expect(actual).to.contain('</div>');
      expect(actual).to.contain('<ul>');
      expect(actual).to.contain('</ul>');
      expect(actual).to.contain('<li>one</li>');
      expect(actual).to.contain('<li>two</li>');
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
