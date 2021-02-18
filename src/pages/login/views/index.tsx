import { IUseLoginViewModel } from "../viewModels/loginViewModel";
import Form from "./Form";

import { LoginImage, Container, FormContainer, TitleContainer, SubtitleContainer, ForgotUserAndPassContainer } from './styles';

export type Props = {
  viewModel: IUseLoginViewModel
};

const LoginView = ({ viewModel }: Props) => {

  return (
    <Container>
      <LoginImage />
      <FormContainer>
        <TitleContainer>Olá, seja <br /> bem-vindo!</TitleContainer>
        <SubtitleContainer>Para acessar a plataforma, <br /> faça seu login.</SubtitleContainer>
        <Form />
        <ForgotUserAndPassContainer>Esqueceu seu login ou senha?
Clique aqui</ForgotUserAndPassContainer>
      </FormContainer>
    </Container>
  );

};

export default LoginView;
