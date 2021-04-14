import React, { useContext, useState } from "react";
import { Marginer } from "../marginer";
import
{
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { AccountContext } from "./context";

const initialState = {
  email: '',
  password: '',
  error: '',
  success: '',

}

export function LoginForm ( props )
{
  const { switchToSignup } = useContext( AccountContext );
  const [ user, setUser ] = useState( initialState );
  const { email, password, error, success } = user

  return (
    <BoxContainer>
      <FormContainer>
        <Input placeholder="Enter your email address" id="email" value={ email} name='email' />
        <Input type="password" placeholder="Password" id="password" value={ password } name='password'/>
      </FormContainer>
      <MutedLink to = '/forgot_password'>Forgot Password?</MutedLink>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton>Login</SubmitButton>
      <Marginer direction="vertical" margin={ 5 } />
      <MutedLink href="#">
        Dont have an Account?
        <BoldLink href="#" onClick={ switchToSignup }>
          sign up
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
