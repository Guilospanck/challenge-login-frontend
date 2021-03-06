import Form from "./Form";

import { LoginImage, Container, FormContainer, TitleContainer, SubtitleContainer, ForgotUserAndPassContainer, MobileFormContainer, BackgroundRectangleMobile } from './styles';

const LoginView = ({FormComponent}) => {

  return (
    <Container>
      <LoginImage>
        <BackgroundRectangleMobile />
      </LoginImage>

      <FormContainer>
        <MobileFormContainer>
          <TitleContainer>Olá, seja <br /> bem-vindo!</TitleContainer>
          <SubtitleContainer>Para acessar a plataforma, faça seu login.</SubtitleContainer>
          <FormComponent />
        </MobileFormContainer>
        <ForgotUserAndPassContainer>Esqueceu seu login ou senha? Clique <a href="">aqui</a>
        </ForgotUserAndPassContainer>
      </FormContainer>
    </Container>
  );

};

export default LoginView;
