import { InputContainer, LabelContainer, ButtonContainer, ButtonDivContainer, FormContainer } from './styles';
import { IUseFormViewModel } from '../../viewModels/formViewModel';
import { FormEvent } from 'react';

type Props = {
  viewModel: IUseFormViewModel
};

const Form = ({ viewModel }: Props) => {

  return (
    <FormContainer onSubmit={viewModel.loginUser}>
      <LabelContainer htmlFor="email" data-testid="labelEmail">E-MAIL</LabelContainer>
      <InputContainer id="email" name="email" type="email" required placeholder="user.name@mail.com" autoFocus
        onInput={() => viewModel.setCustomValidityEmail('')} onInvalid={() => viewModel.setCustomValidityEmail()} ref={viewModel.emailInputRef} data-testid="inputEmail"/>
      <LabelContainer htmlFor="pass" data-testid="labelPassword">SENHA</LabelContainer>
      <InputContainer id="pass" name="pass" type="password" required placeholder="*******" ref={viewModel.passInputRef}  data-testid="inputPassword"
        onInput={() => viewModel.setCustomValidityPassword('')} onInvalid={() => viewModel.setCustomValidityPassword()} />
      <ButtonDivContainer>
        <ButtonContainer type="submit" data-testid="button">ENTRAR</ButtonContainer>
      </ButtonDivContainer>
    </FormContainer>
  )
};

export default Form;
