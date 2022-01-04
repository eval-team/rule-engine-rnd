const sum = require("./kk");

test("adds 1 + 2 to equal 3", () => {
  // Arrange
  // Mock

  // Act
  let exp = sum(1, 2);

  // Assert
  expect(exp).toBe(3);
});
