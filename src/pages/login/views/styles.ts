import styled from 'styled-components';

export const LoginImage = styled.div`
  grid-column: 1;
  width: 100%;
  height: 100vh;

  background-image:  linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 100%),
                  url('https://fastlife.fastshop.com.br/wp-content/uploads/2020/05/shutterstock_1220809918.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 768px){
    background-position: 43%;
  }

  @media only screen and (max-width: 375px){
    grid-column: 1;
    background-size: 160%;
    background-position: 40%;
    background-position-y: -5%;
  }

`;

export const BackgroundRectangleMobile = styled.div`
  @media only screen and (max-width: 375px){
    position: absolute;
    width: 382px;
    height: 553px;
    left: -4px;
    top: 383px;
    background: #130525;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 100%;
  width: 100vw;
  height: 100vh;

  @media only screen and (max-width: 768px){
    grid-template-columns: 30% 70%;
  }

  @media only screen and (max-width: 375px){
    grid-template-columns: 100%;
  }
`;

export const FormContainer = styled.div`
  grid-column: 2;
  align-self: center;
  justify-self: center;

  @media only screen and (max-width: 375px){
    grid-column: 1;
    position: absolute;
    top: 20%;
    left: 8.5%;
  }
`;

export const MobileFormContainer = styled.div`

  @media only screen and (max-width: 375px){
    width: 311px;
    height: 357px;
    display: flex;
    flex-direction: column;
    align-items: center;

    background: #FAF5FF;
    border-radius: 8px;
  }

`;

export const TitleContainer = styled.div`
  width: 231px;
  height: 14vh;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 2.5rem;
  line-height: 3rem;
  color: #383E71;

  @media only screen and (max-width: 375px){
    font-size: 1.5rem;
    line-height: 2rem;
    padding-top: 24px;

    text-align: center;
  }
`;

export const SubtitleContainer = styled.div`
  width: 222px;
  height: 6vh;
  margin-top: 2.4vh;
  margin-bottom: 4.1vh;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25rem;

  color: #989FDB;

  @media only screen and (max-width: 375px){
    width: 255px;
    height: 20px;
    margin-bottom: 0.6vh;

    font-size: 0.75rem;
    line-height: 1.25rem;
    text-align: center;
  }

`;

export const ForgotUserAndPassContainer = styled.div`
  width: 256px;
  height: auto;
  margin-top: 32px;
  margin-right: 0px !important;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.25rem;

  text-align: center;
  color: #989FDB;

  @media only screen and (max-width: 375px){
    padding-left: 14%;
  }

`;

