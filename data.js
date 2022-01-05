const data = [
    [["productName", "=", "100"]],
    "and",
    [["productName", "<>", "1200"], "and",
     ["productName", "contains", "demo"]],
    "or",
    [
      ["productName", "notcontains", "data"],
      "and",
      ["productName", "isblank", ""],
      "and",
      ["productName", "isnotblank"],
      "or",
      ["productName", "startswith", "11"],
      "and",
      ["productName", "endswith", "23"],
    ],
  ];

module.exports=data;