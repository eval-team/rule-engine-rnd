
function JsonRuleResult(data) {
  let all = [];
  let andObj;

  data.forEach((each) => {
    each.forEach((eachOne, j) => {
      switch (each[j]) {
        case "and":
          const previousIndex = j-1

          // Create Object for Previous Array
          andObj = {
            fact: each[previousIndex][0],
            operator:getOperatorName(each[previousIndex][1]),
            value: parseInt(each[previousIndex][2]),
          };

          all.push(andObj);
          const nextIndex = j+1
          // Create Object for Next Array
          andObj = {
            fact: each[nextIndex][0],
            operator:getOperatorName(each[nextIndex][1]),
            value: parseInt(each[nextIndex][2]),
          };
          all.push(andObj);
        
        case 'or':

        

      }
    });
  });
  let any = [{ all }];

  let compleatObject = {
    conditions: { any },
    event: {
      type: "fouledOut",
      params: {
        message: "Player has fouled out!",
      },
    },
  };

  function getOperatorName(value){
    switch(value){
      case '<':
        return "lesserThanInclusive";
      case '=':
        return "equal";
      case '>':
        return 'greaterThanInclusive';
      default :
        return value
    }
  }

  return compleatObject;
}

module.exports = JsonRuleResult;

