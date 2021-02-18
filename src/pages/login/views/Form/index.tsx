import { InputContainer, LabelContainer, ButtonContainer } from './styles';

const Form = () => {
  // const registerUser = async event => {
  //   event.preventDefault()

  //   const res = await fetch(
  //     'https://hooks.zapier.com/hooks/catch/123456/abcde',
  //     {
  //       body: JSON.stringify({
  //         name: event.target.name.value
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       method: 'POST'
  //     }
  //   )

  //   const result = await res.json()
  //   // result.user => 'Ada Lovelace'
  // }

  return (
    <form onSubmit={() => console.log('oi')}>
      <LabelContainer htmlFor="name">E-MAIL</LabelContainer>
      <InputContainer id="name" name="name" type="text" autoComplete="name" required placeholder="user.name@mail.com" />
      <LabelContainer htmlFor="name">SENHA</LabelContainer>
      <InputContainer id="pass" name="pass" type="password" autoComplete="pass" required placeholder="*******" />
      <div>
        <ButtonContainer type="submit">ENTRAR</ButtonContainer>
      </div>
    </form>
  )
};

export default Form;
