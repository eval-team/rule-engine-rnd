let data = [[["price", "<", "1300"], "and", ["productName", "=", "6"]]];

function JsonRuleResult(data) {
  let all = [];
  let allObj;

  data.forEach((each) => {
    each.forEach((eachOne, j) => {
      switch (each[j]) {
        case "and":
          allObj = {
            fact: each[j + 1][0],
            operator: each[j + 1][1],
            value: each[j + 1][2],
          };
          all.push(allObj);
          allObj = {
            fact: each[j - 1][0],
            operator: each[j - 1][1],
            value: each[j - 1][2],
          };
          all.push(allObj);
      }
    });
  });
  let any = [{ all }];

  let demoData = {
    conditions: { any },
    event: {
      type: "fouledOut",
      params: {
        message: "Player has fouled out!",
      },
    },
  };

  return demoData;
}

module.exports = JsonRuleResult;
