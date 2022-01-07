const JsonRuleResult = require("./index");
const JsonRuleResultTwo=require('./index');
const case1Data =require('./case1Data')
const case2Data =require('./data')
  

test("Case 1", () => {
  // Arrange
  let input = case1Data;
  let output = {
    conditions: {
      any: [{
        all: [{
          fact: 'price',
          operator: 'lesserThanInclusive',
          value: 1300
        },
        {
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
  expect(exp).toStrictEqual(output);
});

test("Case 2", () => {
  // Arrange
  let input = case2Data;
  let output = {
    conditions: {
      any: [
        {
          all: [
            {
              fact: "productName",
              operator: "equal",
              value: 100,
            },
            {
              fact: "productName",
              operator: "notEqual",
              value: 1200,
            },
            {
              fact: "productName",
              operator: "contains",
              value: "demo",
            },
            {
              fact: "productName",
              operator: "equal",
              value: "",
            },
            {
              fact: "productName",
              operator: "notEqual",
              value: null,
            },
            {
              fact: "productName",
              operator: "notEqual",
              value: 23,
            },
          ],
  
          any: [
            {
              fact: "productName",
              operator: "doesNotContain",
              value: "data",
            },
            {
              fact: "productName",
              operator: "equal",
              value: 11,
            },
          ],
        },
      ],
    },
    event: {
      type: "fouledOut",
      params: {
        message: "Player has fouled out!",
      },
    },
  };

  // Act
  let exp = JsonRuleResultTwo(input);

  // Assert
  expect(exp).toStrictEqual(output);
});
