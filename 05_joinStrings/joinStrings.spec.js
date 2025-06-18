const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Carlos', () => {
    expect(values.firstName).toEqual('Atisha');
  });
  test.skip('lastName is Stevenson', () => {
    expect(values.lastName).toEqual('Ariga');
  });
  test.skip('thisYear is 1965', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test.skip('birthYear is 1947', () => {
    expect(values.birthYear).toEqual(2006);
  });
  test.skip('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Atisha Ariga and I am 19 years old.');
  });
});

describe('step 3', () => {
  test.skip('fullName is Atisha Ariga', () => {
    expect(values.fullName).toEqual('Atisha Ariga');
  });
  test.skip('age is 19', () => {
    expect(values.age).toEqual(19);
  });
});
