import { InputContainer, LabelContainer, ButtonContainer, ButtonDivContainer, FormContainer } from './styles';
import { IUseFormViewModel } from '../../viewModels/formViewModel';

type Props = {
  viewModel: IUseFormViewModel
};

const Form = ({ viewModel }: Props) => {

  return (
    <FormContainer onSubmit={(e) => { e.preventDefault(); viewModel.loginUser(e.target.email.value, e.target.pass.value);}}>
      <LabelContainer htmlFor="email">E-MAIL</LabelContainer>
      <InputContainer id="email" name="email" type="email" autoComplete="email" required placeholder="user.name@mail.com" autoFocus
        onInvalid={(event) => event.target.setCustomValidity('Informe um email válido.')} />
      <LabelContainer htmlFor="pass">SENHA</LabelContainer>
      <InputContainer id="pass" name="pass" type="password" autoComplete="pass" required placeholder="*******" />
      <ButtonDivContainer>
        <ButtonContainer type="submit">ENTRAR</ButtonContainer>
      </ButtonDivContainer>
    </FormContainer>
  )
};

export default Form;
