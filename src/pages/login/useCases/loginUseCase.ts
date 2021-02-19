import { LoginModel } from '../../../models/login/LoginModel';

export interface ILoginUseCase {
  transformsEmailAndPasswordIntoLoginModel: (email: string, password: string) => LoginModel
};

export class LoginUseCase implements ILoginUseCase {

  transformsEmailAndPasswordIntoLoginModel(email: string, password: string){
    let userCredentials = new LoginModel(email, password);
    return userCredentials;
  }

}
