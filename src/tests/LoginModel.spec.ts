import { LoginModel } from '../models/login/LoginModel';

describe('Login Model Layer Test', () => {

  const fakeMockedEmail = "test@test.com";
  const fakeMockedPass = "test";

  it('Testing instance creation', () => {

    const response =  new LoginModel(fakeMockedEmail, fakeMockedPass);

    expect(response.email).toBe(fakeMockedEmail);
    expect(response.password).toBe(fakeMockedPass);

  });


});
