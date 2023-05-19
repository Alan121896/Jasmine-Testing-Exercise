
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 12000,
    years: 10,
    rate: 4
  }; 
  expect(calculateMonthlyPayment(values)).toEqual('121.49')
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 11000,
    years: 9,
    rate: 5.6
  };
  expect(calculateMonthlyPayment(values)).toEqual('129.90');
});

/// etc
