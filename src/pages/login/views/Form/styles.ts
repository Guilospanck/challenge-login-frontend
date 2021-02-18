import styled from 'styled-components';

export const LabelContainer = styled.label`
    width: 72px;
    height: 2vh;
    margin-top: 2.4vh;
    margin-bottom: 1.2vh;
    margin-left: 11px;

    font-style: normal;
    font-weight: normal;
    font-size: 0.625rem;
    line-height: 3rem;

    display: flex;
    align-items: center;

    color: #383E71;
`;

export const InputContainer = styled.input`
  width: 256px;
  height: 7.3vh;

  border: 1px solid #989FDB;
  box-sizing: border-box;
  border-radius: 8px;

  ::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 3rem;
    padding-left: 17px;
    color: #989FDB;
  }

`;

export const ButtonContainer = styled.button`
  width: 256px;
  height: 7.3vh;
  color: white;
  margin-top: 3.6vh;

  background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
  box-shadow: 0px 10px 25px #CF99DB;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;
