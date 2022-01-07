
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


function JsonRuleResultTwo(data){
  let all = [];
  let any = [];
  let allObj;
  let anyObj;
  
  data.forEach((each, i) => {
    switch (each) {
      case "and":
        allObj = {
          fact: data[i - 1][0][0],
          operator: getOperatorName(data[i - 1][0][1]),
          value:   !isNaN ( data[i - 1][0][2] )?parseInt(data[i - 1][0][2]):data[i - 1][0][2],
        };
        all.push(allObj);     
        let secondData = data[i + 1];
        for (let j = 0; j < secondData.length; j++) {
          switch (secondData[j]) {
            case "and":
              allObj = {
                fact: secondData[j - 1][0],
                operator: getOperatorName(secondData[j - 1][1]),
                value:!isNaN ( secondData[j - 1][2] )?parseInt(secondData[j - 1][2]):secondData[j - 1][2],
              };
              all.push(allObj);
  
              allObj = {
                fact: secondData[j + 1][0],
                operator: getOperatorName(secondData[j + 1][1]),
                value: !isNaN ( secondData[j + 1][2] )?parseInt(secondData[j + 1][2]):secondData[j + 1][2],
              };
              all.push(allObj);
              break;
            case "or":
              anyObj = {
                fact: secondData[j + 1][0],
                operator: getOperatorName(secondData[j + 1][1]),
                value: !isNaN ( secondData[j + 1][2] )?parseInt(secondData[j + 1][2]):secondData[j + 1][2],
              };
              any.push(anyObj);
              break;
          }
        }
        break;
      case "or":
        let afterOrData = data[i + 1];
        anyObj = {
          fact: afterOrData[0][0],
          operator: getOperatorName(afterOrData[0][1]),
          value: !isNaN ( afterOrData[0][2] )?parseInt(afterOrData[0][2]):afterOrData[0][2],
        };
        any.push(anyObj);
        for (let k = 0; k < afterOrData.length; k++) {
          switch (afterOrData[k]) {
            case "or":
              anyObj = {
                fact: afterOrData[k + 1][0],
                operator: getOperatorName(afterOrData[k + 1][1]),
                value: !isNaN ( afterOrData[k + 1][2] )?parseInt(afterOrData[k + 1][2]):afterOrData[k + 1][2],
              };
              any.push(anyObj);
              break;
            case "and":
              allObj = {
                fact: afterOrData[k + 1][0],
                operator: getOperatorName(afterOrData[k + 1][1]),
                value: !isNaN ( afterOrData[k + 1][2] )?parseInt(afterOrData[k + 1][2]):afterOrData[k + 1][2]  ?? null,
              };
              all.push(allObj);
          }
        }
    }
  });
  any = [{ all,any }];

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
        break;
      case '=':
        return "equal";
        break;
      case '>':
        return 'greaterThanInclusive';
        break;
      case '<>':
        return 'notEqual';
        break;
      case 'contains':
        return 'contains';
        break;  
      case 'notcontains':
        return 'doesNotContain';
        break;
      case 'startswith':
        return 'equal';
        break;
      case 'endswith':
        return 'notEqual';
        break;
      case 'isnotblank':
        return 'notEqual';
        break;
      case 'isblank':
        return 'equal';
        break;
      default :
        return value
    }
}


return compleatObject

}

module.exports = JsonRuleResultTwo;