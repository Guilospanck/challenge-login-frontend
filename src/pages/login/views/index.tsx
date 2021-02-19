import { IUseLoginViewModel } from "../viewModels/loginViewModel";
import Form from "./Form";

import { LoginImage, Container, FormContainer, TitleContainer, SubtitleContainer, ForgotUserAndPassContainer, MobileFormContainer } from './styles';

export type Props = {
  viewModel: IUseLoginViewModel
};

const LoginView = ({ viewModel }: Props) => {

  return (
    <Container>
      <LoginImage />
      <FormContainer>
        <MobileFormContainer>
          <TitleContainer>Olá, seja <br /> bem-vindo!</TitleContainer>
          <SubtitleContainer>Para acessar a plataforma, faça seu login.</SubtitleContainer>
          <Form />
        </MobileFormContainer>
        <ForgotUserAndPassContainer>Esqueceu seu login ou senha? Clique aqui
        </ForgotUserAndPassContainer>
      </FormContainer>
    </Container>
  );

};

export default LoginView;
