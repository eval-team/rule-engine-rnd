const JsonRuleResult = require("./index");

test("xyz", () => {
  // Arrange
  let input = [[["price", "<", "1300"], "and", ["productName", "=", "6"]]];
   let output = {
    conditions: {
      any: [{
        all: [{
          fact: 'price',
          operator: 'greaterThanInclusive',
          value: 1300
        }, {
          fact: 'productName',
          operator: 'equal',
          value: 6
        }]
      }]
    },
    event: { 
      type: 'fouledOut',
      params: {
        message: 'Player has fouled out!'
      }
    }
  }


  // Act
  let exp = JsonRuleResult(input);

  // Assert
  expect(exp).toBe(output);
});
