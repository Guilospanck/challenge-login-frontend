import styled from 'styled-components';

export const LoginImage = styled.div`
  position: absolute;
  width: 766px;
  height: 670px;
  left: -1px;
  top: 0px;

  background-image:  linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 100%),
                  url('https://fastlife.fastshop.com.br/wp-content/uploads/2020/05/shutterstock_1220809918.jpg');
  background-repeat: no-repeat;
  grid-column: 1;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  grid-template-rows: 100%;
  width: 100vw;
  height: 100vh;
`;

export const FormContainer = styled.div`
  grid-column: 2;
  align-self: center;
`;

export const TitleContainer = styled.div`
  width: 231px;
  height: 96px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;

  color: #383E71;
`;

export const SubtitleContainer = styled.div`
  width: 222px;
  height: 40px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  color: #989FDB;

`;

export const ForgotUserAndPassContainer = styled.div`
  width: 212px;
  height: 40px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  text-align: center;

  color: #989FDB;
`;
