const data =require('./data')
  
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
                value: !isNaN ( afterOrData[k + 1][2] ) && !" "?parseInt(afterOrData[k + 1][2]):afterOrData[k + 1][2]  ?? null,
              };
              all.push(allObj);
          }
        }
    }
  });

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
      default :
        return value
    }
  }
  
  // console.log(any);
  // console.log(all);
  