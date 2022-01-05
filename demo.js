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
          operator: data[i - 1][0][1] === "=" ? "equal" : data[i - 1][0][1],
          value: parseInt(data[i - 1][0][2]),
        };
        all.push(allObj);
        let secondData = data[i + 1];
        for (let j = 0; j < secondData.length; j++) {
          switch (secondData[j]) {
            case "and":
              allObj = {
                fact: secondData[j - 1][0],
                operator:
                  secondData[j - 1][1] === "<>"
                    ? "notEqual"
                    : secondData[j - 1][1],
                value: parseInt(secondData[j - 1][2]),
              };
              all.push(allObj);
  
              allObj = {
                fact: secondData[j + 1][0],
                operator: secondData[j + 1][1],
                value: secondData[j + 1][2],
              };
              all.push(allObj);
              break;
          }
        }
        break;
      case "or":
        let afterOrData = data[i + 1];
        anyObj = {
          fact: afterOrData[0][0],
          operator: afterOrData[0][1],
          value: afterOrData[0][2],
        };
        any.push(anyObj);
        for (let k = 0; k < afterOrData.length; k++) {
          switch (afterOrData[k]) {
            case "or":
              anyObj = {
                fact: afterOrData[k + 1][0],
                operator: afterOrData[k + 1][1],
                value: afterOrData[k + 1][2],
              };
              any.push(anyObj);
              break;
            case "and":
              allObj = {
                fact: afterOrData[k + 1][0],
                operator: afterOrData[k + 1][1],
                value: afterOrData[k + 1][2] ?? null,
              };
              all.push(allObj);
          }
        }
    }
  });
  
  console.log(any);
  console.log(all);
  